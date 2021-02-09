using System; 

namespace HelloWorld2
{
    class Program
    {
        static void Main(string[] args)
        {
            //Demonstrating Regular Integer Math
            int a = 18;
            int b = 6;
            int c = a / b; 
            Console.WriteLine(c);

            //Demonstrating inability of int type to return non-whole nums
            int a1 = 25;
            int b1 = 2;
            Console.WriteLine(a1 / b1);
            // Regular Division Operator Returns 12. Rounded Down (i.e. Math.Floor) % is used instead of division to grab remainder (i.e. a1%b1 returns 1)
            Console.WriteLine(a1 % b1);

            //Integers Have Min and Max Values
            int max = int.MaxValue;
            int min = int.MinValue;
            Console.WriteLine($"The max int allowed is {max} and the min is {min}"); //

            //Duplicating Overflow Condition (Wrap-Around)
            int overflow = max + 3;
            Console.WriteLine($"An Example of Overflow: {overflow}\n");

            //Working With "Double" Numeric Type
            double A = 5;
            double B = 4;
            double C = 2;
            double D = (A + B) / C;
            Console.WriteLine($"{A} plus {B} divided by {C} is {D} \n"); //returns 4.5 which includes the decimal portion of the quotient

            //Another Example 
            double A1 = 19;
            double B1 = 23;
            double C1 = 8;
            double D1 = (A1 + B1) / C1;
            Console.WriteLine(D1);

            //Floats have much larger range of Max and Min values
            double maxDouble = double.MaxValue;
            double minDouble = double.MinValue;
            double maxDoubleOverflow = maxDouble * 100; 
            Console.WriteLine($"Max Double Number : {maxDouble} \nMin Double Number: {minDouble}\n Overflow: {maxDoubleOverflow}"); // Goes all the way to + and - 1.7976931348623157E+308 


            double oneThird = 1.0 / 3.0;
            Console.WriteLine(oneThird); 
        }
        
        public void NewFunc()
        {
            Console.WriteLine("Hello Friends");
            NewFunc(); 
        }
    }
}