console.log('Program To Do List Hacktiv8 Phase0 Week 2\n');

var nama = prompt('Masukkan Nama');
var hari = prompt('Masukkan salah satu hari (senin/selasa/rabu/kamis/jumat) !');


var senin = ["Mengenal penggunaan Variable dalam JavaScript","Mengenal penggunaan Conditional if-else dalam JavaScript","Mengenal penggunaan Conditional (Switch-Case) dalam JavaScript"];
var selasa = ["Melakukan Perulangan Menggunakan while","Melakukan Perulangan Menggunakan for"];  
var rabu = ["Membuat algoritma sederhana dalam pseudocode","Mengenal Penggunaan Functions","Mengubah Pseudocode menjadi kode JavaScript","Mengubah Pseudocode menjadi kode JavaScript (Part 2)","Menggabungkan Konsep Perulangan dan Kondisional"];    
var kamis = ["Tantangan Array 1 (Mengakses Nilai dalam Array)","Tantangan Array 2 (Melooping menggunakan Array)","Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)"];    
var jumat = ["Menyelesaikan Codecademy JavaScript Course (Hanya sampai Unit 4 - Arrays and Loops)","WEEKLY PROJECT - Simple JavaScript App"];      

if(nama !== null && nama !=="")
  {
  console.log("Halo "+nama+" !");
  }
  

if(hari !==null  && hari !=='')
  {
  var harlow = hari.toLowerCase();
 
function todolist()
{
  if (harlow==='senin')
    {
     console.log("Hari "+harlow+" kita akan mempelajari :");
      for(var index=0;index<senin.length;index++)
        {
         console.log(senin[index]);
        }
     
    }
   else if(harlow==='selasa')
    {
     console.log("Hari "+harlow+" kita akan mempelajari :");
      for(var index=0;index<selasa.length;index++)
        {
         console.log(selasa[index]);
        }
     
    }

   else if(harlow==='rabu')
    {
     console.log("Hari "+harlow+" kita akan mempelajari :");
      for(var index=0;index<rabu.length;index++)
        {
         console.log(rabu[index]);
        }
     
    }

   else if(harlow==='kamis')
    {
     console.log("Hari "+harlow+" akan mempelajari :");
      for(var index=0;index<kamis.length;index++)
        {
         console.log(kamis[index]);
        }
     
    }
  
     else if(harlow==='jumat')
    {
     console.log("Hari "+harlow+" kita akan mempelajari :");
      for(var index=0;index<jumat.length;index++)
        {
         console.log(jumat[index]);
        }
     
    }
    else
      {
         console.log("Kamu memasukkan input di luar hari senin-jumat !");
         console.log("Silahkan jalankan ulang program !"); 
      }
} 

    todolist();
  }