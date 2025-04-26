# 1. Temperature Converter in Pseudocode

**Konversi suhu dari Celcius ke Fahrenheit dan Sebaliknya**
Start
    Print "Masukkan nilai suhu:"   
    input input_temperature 
    Print "Silahkan pilih jenis konversi :
    Print "1. Celcius ke Fahrenheit"
    Print "2 Fahrenheit ke Celcius"
    Input : pilihan 

    If pilihan == 1 Then
       Print "Masukkan Suhu Celcius :"
       Input : suhu_celcius
       suhu fahrenheit = (suhu_celcius x 9/5) + 32
       Print suhu_fahrenheit
    
    Else If pilihan == 2 Then
        Print "Masukkan suhu Fahrenheit :"
        Input : suhu_fahrenheit = (suhu_celcius - 32) x 5/9
        Print suhu_celcius
    
    Else
        Print "pilihan tidak tersedia"
End

**Konversi suhu dari Celcius ke Reamur dan Sebaliknya**
Start
    Print "Masukkan nilai suhu:"   
    Input input_temperature 
    Print "Silahkan pilih jenis konversi :
    Print "1. Celcius ke Reamur"
    Print "2 Reamur ke Celcius"
    Input : pilihan 

    If pilihan == 1 Then
       Print "Masukkan Suhu Celcius :"
       Input : suhu_celcius
       suhu_reamur = suhu_celcius x 4/5
       Print suhu_reamur
    
    Else If pilihan == 2 Then
        Print "Masukkan suhu Reamur :"
        Input : suhu_reamur
        suhu_celcius = suhu_reamur x 5/4
        Print suhu_celcius
    
    Else
        Print "pilihan tidak tersedia"
End

**Konversi suhu dari Celcius ke Kelvin dan Sebaliknya**
Start
    Print "Masukkan nilai suhu:"   
    Input input_temperature 
    Print "Silahkan pilih jenis konversi :
    Print "1. Celcius ke Kelvin"
    Print "2 Kelvin ke Celcius"
    Input : pilihan 

    If pilihan == 1 Then
       Print "Masukkan Suhu Celcius :"
       Input : suhu_celcius
       suhu_kelvin = suhu_celsius + 273.15
       Print suhu_kelvin
    
    Else If pilihan == 2 Then
        Print "Masukkan suhu Kelvin :"
        Input : suhu_kelvin
        suhu_celcius = suhu_kelvin - 273.15
        Print suhu_celcius
    
    Else
        Print "pilihan tidak tersedia"
End

**Jika ketiga konversi tersebut dijadikan menjadi 6 opsi**
Start
    Print "Masukkan nilai suhu:"   
    Input input_temperature 
    Print "Silakan pilih jenis konversi:"
    Print "1. Celsius ke Fahrenheit"
    Print "2. Fahrenheit ke Celsius"
    Print "3. Celsius ke Reamur"
    Print "4. Reamur ke Celsius"
    Print "5. Celsius ke Kelvin"
    Print "6. Kelvin ke Celsius"
    Input → pilihan

    If pilihan == 1 Then
        Print "Masukkan suhu dalam Celsius:"
        Input → suhu_celsius
        suhu_fahrenheit = (suhu_celsius × 9/5) + 32
        Print suhu_fahrenheit

    Else If pilihan == 2 Then
        Print "Masukkan suhu dalam Fahrenheit:"
        Input → suhu_fahrenheit
        suhu_celsius = (suhu_fahrenheit - 32) × 5/9
        Print suhu_celcius

    Else If pilihan == 3 Then
        Print "Masukkan suhu dalam Celsius:"
        Input → suhu_celsius
        suhu_reamur = suhu_celsius × 4/5
        Print suhu_reamur

    Else If pilihan == 4 Then
        Print "Masukkan suhu dalam Reamur:"
        Input → suhu_reamur
        suhu_celsius = suhu_reamur × 5/4
        Print suhu_celcius

    Else If pilihan == 5 Then
        Print "Masukkan suhu dalam Celsius:"
        Input → suhu_celsius
        suhu_kelvin = suhu_celsius + 273.15
        Print suhu_kelvin

    Else If pilihan == 6 Then
        Print "Masukkan suhu dalam Kelvin:"
        Input → suhu_kelvin
        suhu_celsius = suhu_kelvin - 273.15
        Print suhu_celcius

    Else
        Print "Pilihan tidak tersedia"

End








