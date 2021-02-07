using System;

namespace C_
{
  class Program
  {
    static void Main(string[] args)
    {
      string name = "Queen";

      Console.WriteLine($"Hello, my name is {name}");

      System.String greeting = "Hello, World";
      // System.String newGreeting = greeting.Replace("World", name); 

      Console.WriteLine(greeting.Contains(", ")); //Should Return True
      Console.WriteLine(greeting.Replace("World", name)); //
      Console.WriteLine(greeting.IndexOf("Worl"));

      var Queen = (firstName: "Queen", lastName: "Davison", age: 22, favFood: "Papa Johns");

      Console.WriteLine($"{Queen.firstName} -- {Queen.lastName} \n Age: {Queen.age} \n\t FavFood: {Queen.favFood}");
    }

    static void NotMain1(string[] args)
    {
      string name = "Queen";

      string[] people = { "Queen", "Andrew", "Mom" };
      int[] nums = { 4, 5, 6 };

      Console.WriteLine($"{name}");
      Console.WriteLine($"My Girfriends Name Is {name} and her name is {name.Length} letters long");
      Console.WriteLine($"{nums}");
      Console.WriteLine("Hello World!");
      Console.WriteLine(people[1]);
      Console.WriteLine($"{people[0]}");
    }
  }
}
