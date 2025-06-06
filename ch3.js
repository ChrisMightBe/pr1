let size = 9; // Size of the chessboard
let board = "";

for(let i = 0; i < size; i++) 
{
    for(let j = 0; j < size; j++)
    {
        if((i + j) % 2 == 0)
        {
            board = board + " "; // Use space for white squares
        }
        else
        {
            board = board + "#"; // Use hash for black squares
        }
    }
    board = board + "\n"; // New line after each row
}

console.log(board); // Print the chessboard