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
            Console.WriteLine($"An Example of Overflow: {overflow}");

            //Working With "Double" Numeric Type
            double A = 5;
            double B = 4.5;
            double C = 2;
            double D = (A + B) / C;
            Console.WriteLine($"{A} plus {B} divided by {C} is {D}"); 

        }

        public void NewFunc()
        {
            Console.WriteLine("Hello Friends");
            NewFunc(); 
        }
    }
}