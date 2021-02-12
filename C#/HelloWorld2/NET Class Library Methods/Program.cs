using System;

namespace NET_Class_Library_Methods
{
    class Program
    {

          static int DiceGame()
        {
            Random dice = new Random();
            int roll = dice.Next(1, 7);
            return roll; 
        }



        static void Main(string[] args)
        {

            Console.WriteLine(DiceGame());
            Console.WriteLine(DiceGame());
            Console.WriteLine(DiceGame());
            Console.WriteLine(DiceGame());
            Console.WriteLine(DiceGame());
            Console.WriteLine(DiceGame());
        }

    
        
    }
}
