using System;
using System.Collections.Generic; 

namespace Collections_and_Lists
{
    class Program
    {
        static void Main(string[] args)
        {
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

            List<int> numbers = new List<int> { 1, 5, 34, 22, 3, 96, 6, 040, 456 };
            numbers.Sort();

            foreach (int num in numbers)
            {
                Console.WriteLine($"{num} ");
            }
            

        }
    }
}
