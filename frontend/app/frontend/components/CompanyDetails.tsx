import React from 'react';

interface CompanyDetailsProps {
  children: (props: { companyAge: number; avgExperience: number }) => React.ReactNode;
}

function CompanyDetails({ children }: CompanyDetailsProps) {
  // Function to calculate years since March 3, 2008
  const calculateYears = () => {
    const startDate = new Date('2008-03-03');
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    // Adjust if the current date is before March 3rd of this year
    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      return years - 1;
    }
    return years;
  };

  // Calculate company age
  const companyAge = calculateYears();

  // Calculate average years of experience as 35% of company age, capped at 10 years
  const avgExperience = Math.min(Math.round(companyAge * 0.35), 10);

  return <>{children({ companyAge, avgExperience })}</>;
}

export default CompanyDetails;