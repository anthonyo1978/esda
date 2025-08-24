"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Settings() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    companyName: "",
    mobile: "",
    primaryEmail: "",
    secondaryEmail: "",
    address: "",
    facebookUrl: "",
    linkedinUrl: "",
    youtubeUrl: "",
    githubUrl: "",
    twitterUrl: "",
    copyrightText: "",
  });

  const [logo, setLogo] = useState<File | null>(null);
  const [favicon, setFavicon] = useState<File | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [settingId, setSettingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(`${API_URL}/settings`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to fetch settings");

        const settings = await response.json();

        if (!settings.length) return;

        const settingsMap = settings.reduce(
          (acc: any, { slug, value }: any) => {
            acc[slug] = value || "";
            return acc;
          },
          {}
        );

        setFormData({
          companyName: settingsMap.company_name || "",
          mobile: settingsMap.mobile || "",
          primaryEmail: settingsMap.primary_email || "",
          secondaryEmail: settingsMap.secondary_email || "",
          address: settingsMap.address || "",
          facebookUrl: settingsMap.facebook_url || "",
          linkedinUrl: settingsMap.linkedin_url || "",
          youtubeUrl: settingsMap.youtube_url || "",
          githubUrl: settingsMap.github_url || "",
          twitterUrl: settingsMap.twitter_url || "",
          copyrightText: settingsMap.copyright_text || "",
        });

        setLogoUrl(settingsMap.logo || null);
        setFaviconUrl(settingsMap.favicon || null);
        setSettingId(settings[0]?.id?.toString() || null);
      } catch (error) {
        console.error("Error fetching settings:", error);
        toast({
          title: "Error",
          description: "Failed to load settings.",
          variant: "destructive",
          duration: 5000,
        });
      }
    };

    fetchSettings();
  }, [toast]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
      setLogoUrl(null);
    }
  };

  const handleFaviconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFavicon(e.target.files[0]);
      setFaviconUrl(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!settingId) {
        throw new Error("Setting ID not found");
      }

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value || "");
      });
      if (logo) formDataToSend.append("logo", logo);
      if (favicon) formDataToSend.append("favicon", favicon);

      const response = await fetch(`${API_URL}/settings/update-multiple`, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to update settings");
      }

      const result = await response.json();

      setIsModalOpen(true);

      if (result.logo) setLogoUrl(result.logo);
      if (result.favicon) setFaviconUrl(result.favicon);
    } catch (error) {
      console.error("Error saving settings:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to update settings",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <AdminLayout>
    <>

    <div className="p-6 my-6"> 
        <h1 className="text-2xl font-bold text-gray-800">Company Settings</h1>
        <div className="w-full my-5">
          <div>
            <form onSubmit={handleSubmit}>
              <fieldset disabled={isLoading}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="logo">Company Logo</Label>
                    <Input
                      id="logo"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                    />
                    {(logo || logoUrl) && (
                      <img
                        src={
                          logo
                            ? URL.createObjectURL(logo)
                            : logoUrl
                            ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${logoUrl}`
                            : "/placeholder.png"
                        }
                        alt="Logo Preview"
                        className="h-12 mt-2 border rounded-md"
                      />
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="favicon">Favicon</Label>
                    <Input
                      id="favicon"
                      type="file"
                      accept="image/*"
                      onChange={handleFaviconChange}
                    />
                    {(favicon || faviconUrl) && (
                      <img
                        src={
                          favicon
                            ? URL.createObjectURL(favicon)
                            : faviconUrl
                            ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${faviconUrl}`
                            : "/placeholder.png"
                        }
                        alt="Favicon Preview"
                        className="h-12 mt-2 border rounded-md"
                      />
                    )}
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Company Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="primaryEmail">Primary Email</Label>
                      <Input
                        id="primaryEmail"
                        name="primaryEmail"
                        type="email"
                        value={formData.primaryEmail}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondaryEmail">Secondary Email</Label>
                      <Input
                        id="secondaryEmail"
                        name="secondaryEmail"
                        type="email"
                        value={formData.secondaryEmail}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Company Address</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Social Media Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="facebookUrl">Facebook URL</Label>
                      <Input
                        id="facebookUrl"
                        name="facebookUrl"
                        type="url"
                        value={formData.facebookUrl}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitterUrl">Twitter URL</Label>
                      <Input
                        id="twitterUrl"
                        name="twitterUrl"
                        type="url"
                        value={formData.twitterUrl}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                      <Input
                        id="linkedinUrl"
                        name="linkedinUrl"
                        type="url"
                        value={formData.linkedinUrl}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="youtubeUrl">YouTube URL</Label>
                      <Input
                        id="youtubeUrl"
                        name="youtubeUrl"
                        type="url"
                        value={formData.youtubeUrl}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="githubUrl">GitHub URL</Label>
                      <Input
                        id="githubUrl"
                        name="githubUrl"
                        type="url"
                        value={formData.githubUrl}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-2">
                  <Label htmlFor="copyrightText">Copyright Text</Label>
                  <Textarea
                    id="copyrightText"
                    name="copyrightText"
                    value={formData.copyrightText}
                    onChange={handleChange}
                  />
                </div>
              </fieldset>

              <div className="flex justify-end pt-4 my-3">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings Updated</DialogTitle>
            <DialogDescription>
              All company settings, including logo and favicon, have been
              successfully updated.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>
      </>
    // </AdminLayout>
  );
}