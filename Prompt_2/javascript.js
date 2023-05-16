var a,b,c,d,e,avg,sum;
a = parseInt(prompt("Marks 1"));
b = parseInt(prompt("Marks 2"));
c = parseInt(prompt("Marks 3"));
d = parseInt(prompt("Marks 4"));
e = parseInt(prompt("Marks 5"));


sum = a+b+c+d+e;
avg = sum/5;

document.write("Sum="+sum);
document.write("<br>Avg="+avg);

if (avg>=80)
{
    document.write("<br>Grade = A");
}

else if (avg>=70)   
{
    document.write("<br>Grade = B");
}
else
{
    document.write("<br>Grade = C");
}



