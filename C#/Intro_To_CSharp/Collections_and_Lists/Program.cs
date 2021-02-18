using System;
using System.Collections.Generic; 

namespace Collections_and_Lists
{
    class Program
    {

        /// <summary>
        /// Implements a Fibonacci Sequence 
        /// </summary>
        /// <returns>A list of type 'int' that contains the first 20 numbers in the Fibonacci sequence/returns>
        
        static List<int> Fibonacci()
        {
            List<int> fibonacci = new List<int>();
            fibonacci.Add(1);
            fibonacci.Add(1); 

            for (int i = 2; i < 20; i++)
            {
                int previous = fibonacci[i - 1];
                int previous2 = fibonacci[i - 2];

                fibonacci.Add((previous + previous2)); 
            }
            return fibonacci;
        }

        /// <summary>
        /// Takes a List of type int and enumerates each value, printing it to the console.
        /// </summary>
        /// <param name="fibSequence"></param>
        static void EnumerateFibonacci(List<int> fibSequence)
        {
            foreach (int num in fibSequence)
            {
                Console.WriteLine(num);
            }
            //Console.WriteLine(fibSequence[19]);
        }
        static void Main(string[] args)
        {
            EnumerateFibonacci(Fibonacci()); 
            var names = new List<string> { "Andrew", "Queen", "Ashley" };
   
            //foreach(string name in names)
            //{
            //    Console.WriteLine($"Hello, {name.ToUpper()}!"); 
            //}

            List<string> pickOne = new List<string> { "Lebron", "Steph", "KD", "Draymond", "Dame Dolla", "CJ McCollum", "Harden", "Clyde The Glyde", "Brandon Ingram", "Spyda D Mitchell" };
            var person = new Random();
            for (int i = 0; i<500; i++)
            {
                names.Add(pickOne[person.Next(0,10)]);
            }

            for (int i = 0; i < names.Count; i++)
            {
                Console.WriteLine($"Name {i+1}: {names[i]}\n");
            }
        }

    }
}
