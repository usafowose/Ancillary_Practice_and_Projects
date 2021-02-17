using System;
using System.Collections.Generic; 

namespace Collections_and_Lists
{
    class Program
    {
        static void Main(string[] args)
        {
            var names = new List<string> { "Andrew", "Queen", "Ashley" };
   
            //foreach(var name in names)
            //{
            //    Console.WriteLine($"Hello, {name.ToUpper()}!"); 
            //}

            names.Add("Maria");
            names.Add("John");
            names.Remove("Ashley");

            names.ForEach(Console.WriteLine);

            int length = names.Count;

            for (int i = 0; i < length; i++)
            {
                Console.WriteLine($"Name {i+1}: {names[i]}\n");
            }



        }
    }
}
