using System;

namespace WorkingWithArrays
{
    class Program
    {

        static string[] ArrayPractice()
        {
            string[] names = new string[5]; // allocates memory for string array containing 5 values; 
            names[0] = "Andrew";
            names[1] = "Fikayo";
            names[2] = "Mobolaji";
            names[3] = "Jimmy";
            names[4] = "Simeon";

            return names;
        }

        static void Enumerate(string[] names)
        {
            foreach (string name in names)
            {
                Console.WriteLine(name); 
            }
        }
        static void Main(string[] args)
        {
            Enumerate(ArrayPractice()); 
            Console.WriteLine("Hello World!");
        }
    }
}
