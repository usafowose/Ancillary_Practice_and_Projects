using System;

namespace Classes
{
    public class Person
    {
        public string Name;
        public byte Age;
        public string Gender;
        public byte Weight;

        public static int Walk(int distance) => distance;

        public string Talk() 
        {
            return $"{this.Name} says Hello!"; 
        }

        public string Introduce() 
        {
            return $"Hello! My name is {this.Name}. I am a {this.Age} years old {this.Gender}. I weigh {this.Weight} lbs.";
        }

    }

    public class Program 
    {
        static void Main() 
        {
            Person drew = new Person
            {
                Name = "Andrew",
                Age = 23,
                Gender = "Male",
                Weight = 230
            };

            Console.WriteLine(Person.Walk(20));
            Console.WriteLine(drew.Talk());
            Console.WriteLine(drew.Introduce()); 

        }
    }
    
}
