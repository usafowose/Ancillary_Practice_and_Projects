using System;

namespace If_Statement
{
    class Program
    {

        static int Play()
        {
            Random dice = new Random();
            int roll1 = dice.Next(1, 7);
            int roll2 = dice.Next(1, 7); 
            int roll3 = dice.Next(1,7);
            int[] rolls = { roll1, roll2, roll3 };
            int score = 0; 

            foreach(int roll in rolls)
            {
                Console.WriteLine(roll); 
                score += roll; 
            }

            if ((roll1 == roll2) || (roll2 == roll3) || (roll3 == roll1))
            {
                Console.WriteLine(@"You Scored A Double! +2 Pts!");
                 
                score += 2; 
            }

            if((roll1==roll2) && (roll2==roll3))
            {
                Console.WriteLine("You Scored A Triple: +6 Points!");
                score += 6; 
            }
            Console.WriteLine(score);
            return score;
        }

        static bool Win(int score)
        {
            if (score >= 15)
            {
                return true;
            }

            return false;
        }
        static void Main(string[] args)
        {
            if (Win(Play()))
            {
                Console.WriteLine("You Win");
            } else
            {
                Console.WriteLine("Sorry You Lose");
            }
        }
    }
}
