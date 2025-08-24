import { PrismaClient } from "@prisma/client";

import formidable from 'formidable';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const prisma = new PrismaClient();

// For ESM to simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// BigInt serializer
const serializeBigInt = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
};

// Get all settings
export const getSettingsList = async (req, res) => {
  const settingsList = await prisma.settings.findMany();
  res.json(serializeBigInt(settingsList));
};

// Get setting by ID
export const getSettingsById = async (req, res) => {
  try {
    const { id } = req.params;
    const settings = await prisma.settings.findUnique({
      where: { id: BigInt(id) },
    });
    if (!settings) {
      return res.status(404).json({ error: 'Settings entry not found' });
    }
    res.json(serializeBigInt(settings));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create setting
export const createSetting = async (req, res) => {
  const data = req.body;
  const setting = await prisma.settings.create({ data });
  res.status(201).json(serializeBigInt(setting));
};

// Update setting
export const updateSetting = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const setting = await prisma.settings.update({
    where: { id: BigInt(id) },
    data,
  });
  res.json(serializeBigInt(setting));
};

// Delete setting
export const deleteSetting = async (req, res) => {
  const { id } = req.params;
  await prisma.settings.delete({
    where: { id: BigInt(id) },
  });
  res.status(204).send();
};

// Utility to promisify formidable parse
const parseForm = (req, form) =>
  new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve([fields, files]);
    });
  });

// Update multiple settings including file uploads
export const updateMultipleSettings = async (req, res) => {
  try {
    const uploadDir = path.join(__dirname, '../uploads');
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log('Upload directory:', uploadDir); // ✅ Debugging upload path

    const form = formidable({
      multiples: true,
      keepExtensions: true,
      uploadDir,
    });

    const [fields, files] = await parseForm(req, form);

    const fieldMapping = {
      companyName: 'company_name',
      mobile: 'mobile',
      primaryEmail: 'primary_email',
      secondaryEmail: 'secondary_email',
      address: 'address',
      facebookUrl: 'facebook_url',
      linkedinUrl: 'linkedin_url',
      youtubeUrl: 'youtube_url',
      githubUrl: 'github_url',
      twitterUrl: 'twitter_url',
      copyrightText: 'copyright_text',
      logo: 'logo',
      favicon: 'favicon',
    };

    const settingsToUpdate = [];
    const fileKeys = ['logo', 'favicon'];

    // ✅ Handle file uploads
    for (const fileKey of fileKeys) {
      const file = files[fileKey]?.[0];
      if (file) {
        const filename = `${Date.now()}_${file.originalFilename}`;
        const newPath = path.join(uploadDir, filename);
        console.log(`Saving file for ${fileKey}:`, newPath); // ✅ Debug
        fs.renameSync(file.filepath, newPath);

        const fileUrl = `/uploads/${filename}`;
        const slug = fieldMapping[fileKey];
        settingsToUpdate.push({ slug, value: fileUrl });
      }
    }

    // ✅ Handle text fields
    for (const [key, value] of Object.entries(fields)) {
      if (fieldMapping[key]) {
        const slug = fieldMapping[key];
        settingsToUpdate.push({ slug, value: value?.[0] || '' });
      }
    }

    // ✅ Upsert settings
    const updatePromises = settingsToUpdate.map(async ({ slug, value }) => {
      const existingSetting = await prisma.settings.findFirst({ where: { slug } });
      if (existingSetting) {
        return prisma.settings.update({
          where: { id: existingSetting.id },
          data: { value },
        });
      } else {
        return prisma.settings.create({
          data: { slug, value },
        });
      }
    });

    await Promise.all(updatePromises);

    const updatedSettings = await prisma.settings.findMany({
      where: {
        slug: {
          in: settingsToUpdate.map((s) => s.slug),
        },
      },
    });

    res.json(updatedSettings.map(serializeBigInt));
  } catch (error) {
    console.error('Error updating settings:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update settings',
      error: error.message,
    });
  }
};
