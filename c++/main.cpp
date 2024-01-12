#include <iostream>
#include <ctime>
using namespace std;

int main()
{
    string characters;
    cout << "give me four random characters, eg: '9/~e': ";
    cin >> characters;
    vector<char> line;
    int scale = 40;
    int num = 0;
    srand(time(0));
    while (num < 20)
    {
        for (int x = 0; x < scale; x++)
        {
            int random = rand() % 4;
            switch (random)
            {
            case 0:
                line.push_back(characters[0]);
                break;
            case 1:
                line.push_back(characters[1]);
                break;
            case 2:
                line.push_back(characters[2]);
                break;
            case 3:
                line.push_back(characters[3]);
                break;
            }
        };
        for (int i = 0; i < scale; i++)
        {
            cout << line[i];
        }
        cout << endl;
        line.clear();
        num++;
    }
    return 0;
}