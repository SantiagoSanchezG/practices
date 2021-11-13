#include<iostream>
#include<stdlib.h>

int main(int r, int c, int *a){
    std::cout<<"Positions number(rows): ";std::cin>>r;
    std::cout<<"\nPositions number (columns): "; std::cin>>c;
    a = new int[c];
    for(int i = 0; i < c; i++){
        a[i] = new int[r];
    }
    //*************
    for(int i = 0; i < c; i++){
        delete [] a[i];
    }
    delete [] a;
    return 0;
}
