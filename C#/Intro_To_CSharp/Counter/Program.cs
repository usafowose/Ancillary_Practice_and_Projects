using System;

namespace Counter
{
    class Program
    {
        static int Counter(int countTo)
        {
            int count = 1;
            int finish = countTo; 

            while (count<=countTo)
            {
                Console.WriteLine($"The Counter Is: {count}");
                count++;
            }

            return count - 1; 
        }

        static void Countdown(int start)
        {
            int count = start;
            while (count >= 0)
            {
                Console.WriteLine($"Countdown from {count}");
                count--; 
            }
            return;
        }


        static void ABC(char start)
        {
            char firstLetter = start;
            char endOfAlphabet = 'z';

            for (char i = firstLetter; i <= endOfAlphabet; i++)
            {
                Console.WriteLine($"Current Letter: {firstLetter}");
                firstLetter++;
            }
        }

        static void CellBlock(int row, char column)
        {
            int startRow = row;
            char startChar = column;

            for (int i = startRow; i < 10; i++)
            {
                for (char j = startChar; j <= 'z'; j++)
                {
                    Console.WriteLine($"The Cell is Now ({i}, {j})\n"); 
                }
            }
        }

        static void DivisibleByThree(int end)
        {
            int start = end;
            int sum = 0; 

            while ( start>=1)
            {
                if(start%3==0)
                {
                    Console.WriteLine(start);
                    sum += start; 
                }
                start--;  
            }

            Console.WriteLine(sum); 
        }

        static void Main(string[] args)
        {
            Countdown(Counter(20));
            ABC('i');
            CellBlock(1, 'q');
            DivisibleByThree(20); 
        }
    }
}
