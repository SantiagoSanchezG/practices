#include <iostream>
#include <string.h>

int a,e,i,o,u;
void contar(char*);

int main(){
    char c[40]; std::cout<<"Write a chain of text: ";
    std::cin.getline(c,40,'\n'); strupr(c); contar(c);
    std::cout<<"a: "<<a<<"\ne: "<<e<<"\ni: "<<i<<"\no: "<<o<<"\nu: "<<u;
    return 0;
}

void contar(char *n){
    while(*n){
        switch(*n){
            case 'A': a++; break;
            case 'E': e++; break;
            case 'I': i++; break;
            case 'O': o++; break;
            case 'U': u++; break;
        } n++;
    }
}
