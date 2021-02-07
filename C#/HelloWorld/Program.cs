using System;

namespace C_
{
  class Program
  {
    static void Main(string[] args)
    {
      // PLAYING AROUND WITH STRINGS AND THEIR METHODS
      string name = "Queen";
      string statement = $"Queen is a professional that likes dogs";

      bool validate = statement.Contains(name);
      bool checkStart = statement.StartsWith("Quee");
      bool checkEnd = statement.EndsWith("dogs");

      int index = statement.IndexOf("professional");
      string newStatement = statement.Replace("professional", "baddie").Replace("dogs", "cats");
      string newStatementEmphasized = newStatement.Replace(name, name.ToUpper());


      Console.WriteLine($"{checkStart} {checkEnd}");
      Console.WriteLine($"Is the Word {name} in the Statement? {validate} \nThe Word \"Professional\" is found at Index {index} ");
      Console.WriteLine("-----------------------");
      Console.WriteLine($"Old Statement: {statement}");
      Console.WriteLine($"New Statement: {newStatement}");
      Console.WriteLine($"Emphasized Statement: {newStatementEmphasized}");


      var Queen = (firstName: "Queen", lastName: "Davison", age: 22, favFood: "Papa Johns");
      Console.WriteLine($"First Name: {Queen.firstName} \nSurname: {Queen.lastName}\nAge: {Queen.age} \nFavFood: {Queen.favFood}");
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
