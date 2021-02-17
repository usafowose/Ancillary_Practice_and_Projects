using System;

namespace WorkingWithArrays
{
    class Program
    {

        static string[] ArrayPractice()
        {
            string[] declaredNames = new string[5]; // allocates memory for string array containing 5 values; prepoulated with 5 empty strings
            int[] nums = { 1, 2, 3, 4, 5 }; // also allocates memory for int arr containing 5 vals; 
            int[] nums2 = new int[2] {1, 2}; //allocates space for int arr w/ 2 vals and initialized those vals as 1 and 2
            int[] extraNums = new int[2]; //allocates space in memory for int arr contaning 2 vals and pre-populates those vals as 0 and 0;
            int[] nums3 = new int[] { 10, 15, 20, 25 };

            declaredNames[0] = "Andrew";
            declaredNames[1] = "Fikayo";
            declaredNames[2] = "Mobolaji";
            declaredNames[3] = "Jimmy";
            declaredNames[4] = "Simeon";

            string[] names = { "Andrew", "Fikayo", "Mobolaji", "Jimmy", "Simeon" };  //Initializing the Array -- Providing Values In Declaration

            names[3] = "Follies"; //Re-Assigning A Value to Elem @ 3rd Index;
            // names[5] = "Non-Existent Sibling"; //Exception Thrown: Index was outside the bounds of the array --> arr was initialized @ 5 vals, but I attemot to access 6th val (5th index)
            return names;
        }

        static void Enumerate(string[] names)
        {
            foreach (string name in names)
            {
                Console.WriteLine(name); 
            }
        }

        static int Count(string[] namesArr)
        {
            int count = 0;
            foreach (var name in namesArr)
            {
                count++; 
            }
            return count; 
        }

        static int Length = Count(ArrayPractice()); 
        static void Main(string[] args)
        {
            Enumerate(ArrayPractice());
            Console.WriteLine($"The length of the array is {Program.Length}"); 
            //Console.WriteLine("Hello World!");
        }
    }
}
 
