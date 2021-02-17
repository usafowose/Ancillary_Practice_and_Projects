using System;

namespace WorkingWithArrays
{
    class Program
    {

        static string[] ArrayPractice()
        {
            string[] names = new string[5]; // allocates memory for string array containing 5 values; prepoulated with 5 empty strings
            int[] nums = { 1, 2, 3, 4, 5 }; // also allocates memory for int arr containing 5 vals; 
            int[] nums2 = new int[2] {1, 2}; //allocates space for int arr w/ 2 vals and initialized those vals as 1 and 2
            int[] extraNums = new int[2]; //allocates space in memory for int arr contaning 2 vals and pre-populates those vals as 0 and 0;
            int[] nums3 = new int[] { 10, 15, 20, 25 };  

            names[0] = "Andrew";
            names[1] = "Fikayo";
            names[2] = "Mobolaji";
            names[3] = "Jimmy";
            names[4] = "Simeon";
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
        static void Main(string[] args)
        {
            Enumerate(ArrayPractice()); 
            //Console.WriteLine("Hello World!");
        }
    }
}
