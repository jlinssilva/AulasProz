def soma(numero):
    for i in range(1,11):
        print(numero, " + ", i, " = ", numero+i);

def subtracao(numero):
    for i in range(10,0,-1):
        print(i, " - ", numero, " = ", i-numero);

def multiplicacao(numero):
    for i in range(1,11):
        print(numero, " x ", i, " = ", numero*i);

def divisao(numero):
    if numero != 0:
        for i in range(1,11):
            print(i*numero, " / ", numero, " = ", (i*numero)/numero);
    else:
        print("Nao é possível dividir por ZERO")

def operacoes():
    print("Escolha qual a operação que você deseja:");
    print("[ + ] - Soma");
    print("[ - ] - Subtração");
    print("[ * ] - Multiplicação");
    print("[ / ] - Divisão");
    operacao = input();
    return operacao;

def main():
    print("Calculadora de Tabuada");
    operacao = operacoes();
    while True:
        try: 
            numero = int(input("Para qual número você deseja gerar a tabuada: "));
            break;
        except:
            print("Você não informou uma número válido. \n Por favor tente novamente.");
    
    if operacao == "+":
        soma(numero);
    elif operacao == "-":
        subtracao(numero);
    elif operacao == "*":
        multiplicacao(numero);
    else:
        divisao(numero);


main();