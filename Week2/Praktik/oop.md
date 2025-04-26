# 2. OOP General Concept for Temperature Converter

**Penjelasan singkat mengenai OOP (Object Oriented Programming) secara umum (Class, Object, Method dan Property**)

OOP (Object-Oriented Programming) itu sebenarnya cara kita membuat program dengan memecah masalah menjadi objek-objek kecil yang bisa memiliki data dan bisa melakukan tindakan. Konsep dasarnya seperti ini:

Class: Seperti template atau cetakan untuk membuat object

Object: Contoh nyata dari sebuah Class

Method: Fungsi yang didefinisikan dalam kelas, yang dapat melakukan operasi pada objek.

Property: Variabel atau atribut yang dimiliki oleh objek, berisi data atau informasi yang relevan.

**Contoh bagaimana konsep OOP bisa digunakan untuk temperatur converter**

CLASS Temperature
PROPERTY temperature //Ini adalah tempat untuk menyimpan nilai suhu yang ingin dikonversi

    METHOD __init__(input_temperature)
        // Konstruktor ini digunakan untuk mengisi nilai suhu saat objek dibuat
        SET temperature = input_temperature

    METHOD celcius_to_fahrenheit()
        // Mengubah suhu dari Celcius ke Fahrenheit
        RETURN (temperature * 9/5) + 32

    METHOD fahrenheit_to_celcius()
        // Mengubah suhu dari Fahrenheit ke Celcius
        RETURN (temperature - 32) * 5/9

    METHOD celcius_to_reamur()
        // Mengubah suhu dari Celcius ke Reamur
        RETURN temperature * 4/5

    METHOD reamur_to_celcius()
        // Mengubah suhu dari Reamur ke Celcius
        RETURN temperature * 5/4

    METHOD celcius_to_kelvin()
        // Mengubah suhu dari Celcius ke Kelvin
        RETURN temperature + 273.15

    METHOD kelvin_to_celcius()
        // Mengubah suhu dari Kelvin ke Celcius
        RETURN temperature - 273.15

END CLASS

**Program Utama**
START
PRINT "Masukkan nilai suhu:" // Meminta pengguna memasukkan nilai suhu
INPUT input_temperature // User memasukkan suhu yang ingin dikonversi

    CREATE OBJECT temp FROM CLASS Temperature WITH input_temperature
    // Membuat objek 'temp' dari class Temperature dan mengisi dengan nilai suhu

    PRINT "Pilih konversi:"      // Menampilkan pilihan konversi
    PRINT "1. Celcius ke Fahrenheit"
    PRINT "2. Fahrenheit ke Celcius"
    PRINT "3. Celcius ke Reamur"
    PRINT "4. Reamur ke Celcius"
    PRINT "5. Celcius ke Kelvin"
    PRINT "6. Kelvin ke Celcius"
    INPUT choice                  // Meminta pengguna memilih jenis konversi

    IF choice == 1 THEN
        PRINT temp.celcius_to_fahrenheit()   // Jika memilih konversi Celcius ke Fahrenheit, tampilkan hasilnya
    ELSE IF choice == 2 THEN
        PRINT temp.fahrenheit_to_celcius()   // Jika memilih konversi Fahrenheit ke Celcius, tampilkan hasilnya
    ELSE IF choice == 3 THEN
        PRINT temp.celcius_to_reamur()      // Jika memilih konversi Celcius ke Reamur, tampilkan hasilnya
    ELSE IF choice == 4 THEN
        PRINT temp.reamur_to_celcius()      // Jika memilih konversi Reamur ke Celcius, tampilkan hasilnya
    ELSE IF choice == 5 THEN
        PRINT temp.celcius_to_kelvin()      // Jika memilih konversi Celcius ke Kelvin, tampilkan hasilnya
    ELSE IF choice == 6 THEN
        PRINT temp.kelvin_to_celcius()      // Jika memilih konversi Kelvin ke Celcius, tampilkan hasilnya
    ELSE
        PRINT "Pilihan tidak valid"          // Jika pilihan tidak valid, tampilkan pesan error

END
