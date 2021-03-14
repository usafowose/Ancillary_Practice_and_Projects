using System;

namespace Calculator
{
    public class SalaryCalculator
    {
        const int HoursInYear = 2080;
        public decimal GetAnnualSalary(decimal hourlyWage) 
        {
            
            decimal annualSalary = hourlyWage * HoursInYear;
            return annualSalary; 
        }

        public decimal GetHourlyWage(decimal annualSalary)
        {
            decimal hourlyWage = annualSalary / HoursInYear;
            return hourlyWage; 
        }
    }
}
