#include <stdio.h>
#include <string.h>

// declaration of used methods;
int get_height(void);
char *get_row(int index, int height);
char *get_blocks(int row_number);
char *get_leading_whitespace(int row_number, int height);

int main(void)
{
  const int height = get_height();
  for (int i = 0; i < height; i++)
  {
    printf("%s\n", get_row(i, height));
  }
}

int get_height(void)
{
  int height;
  do
  {
    height = get_int("Height: ");
  } while (height < 1 || height > 8);

  return height;
}

char *get_row(int index, int height)
{
  const int height_const = height;
  int row_number = index + 1;
  char leading_whitespace[8] = get_leading_whitespace(row_number, height_const);
  char blocks[8] = get_blocks(row_number);
  const char middle_whitespace[2] = "  ";
  char pyramid_row[16] = "";
  for (int i = 0; i < height; i++)
  {
    strcat(pyramid_row, ("%s%s%s%s", leading_whitespace, blocks, middle_whitespace, blocks));
  }

  // return string representation of row;
  return pyramid_row;
}

char *get_blocks(int row_number)
{
  char *destination[row_number + 1];
  for (int i = 0; i < row_number; i++)
  {
    strcat(destination, "#");
  }
  return destination;
}

char *get_leading_whitespace(int row_number, int height)
{
  const int whitespaces_needed = height - row_number;
  char *whitespace_destination[whitespaces_needed];

  for (int i = 0; i < whitespaces_needed; i++)
  {
    strcat(whitespace_destination, " ");
  }

  return whitespace_destination;
}