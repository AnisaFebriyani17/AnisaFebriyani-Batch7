# Rangkuman Algoritma dan Konsep OOP

**Algoritma**:
- Serangkaian langkah logis untuk menyelesaikan masalah atau tugas.
- Dapat ditemukan dalam kehidupan sehari-hari, seperti saat memasak.
- Pseudocode adalah cara menulis algoritma dalam bentuk yang lebih terstruktur dan mudah dipahami sebelum diimplementasikan dalam kode program.

- **Contoh Pseudocode:**
Start
Input bangun
IF bangun == "ya" THEN
    Output "Pakai seragam"
    Output "Pergi ke sekolah"
ELSE
    Output "Tidur lagi"
ENDIF
End

**Notasi untuk menggambarkan algoritma**:
- Pseudocode dan Flowchart membantu dalam menggambarkan proses secara visual.
- Penting untuk kolaborasi tim karena memudahkan komunikasi antara pengembang.

**Perulangan**:
- Mengulang pola yang sama sampai kondisi terpenuhi.

**Variabel**:
- Tempat untuk menyimpan nilai dengan tipe data tertentu, seperti number.

**Data Structure**:
- **Stack**: Struktur data yang digunakan untuk menyimpan data dalam urutan tertentu.
- **Heap**: Struktur data yang digunakan untuk menyimpan objek secara dinamis.


**Paradigma Pemrograman**:

1. **Imperative Paradigm**: Fokus pada *how to achieve things*, yaitu bagaimana cara mencapai tujuan.
2. **Declarative Paradigm**: Fokus pada *what will we achieve*, yaitu apa yang ingin dicapai.
3. **Procedural Paradigm**: Menulis kode dalam bentuk prosedur atau fungsi yang menjalankan tugas tertentu.
4. **Logical Paradigm**: Menggunakan logika formal untuk menyelesaikan masalah.

**OOP (Object-Oriented Programming)**:
- Pendekatan pemrograman yang membagi kode ke dalam objek yang memiliki data dan fungsi sendiri, serta dapat saling berinteraksi.
- Objek : Entitas dengan atribut dan metode. Misalnya, objek Kucing memiliki atribut seperti nama, jenis, dan umur, serta metode seperti makan(), tidur(), dan mengeong().
- Class: Blueprint untuk objek, mendefinisikan sifat umum objek tersebut.
- Object: Instansiasi dari class, misalnya objek Mobil Avanza dari class Mobil.

**Fitur-fitur OOP**:
1. **Polymorphism**: Kemampuan objek untuk memiliki banyak bentuk. Misalnya, metode yang sama dapat dipanggil pada objek yang berbeda.

Contoh
   class Hewan {}
   class Kucing extends Hewan {}
   class Domba extends Hewan {}
 
2. **Inheritance**: Proses di mana sebuah class mewarisi sifat dan metode dari class lain.
 Contoh
   class Burung {}
   class Terbang extends Burung {}

3. Encapsulation: Menyembunyikan detail implementasi dan hanya memberikan antarmuka yang diperlukan.
4. Abstraction : Menyederhanakan kompleksitas dengan menyembunyikan implementasi yang tidak perlu.

**Prinsip Pemrograman OOP**:
- **SOLID Principles**: Prinsip dasar dalam OOP untuk menulis kode yang bersih dan mudah dipelihara.
  - **S**: Single Responsibility Principle
  - **O**: Open/Closed Principle
  - **L**: Liskov Substitution Principle
  - **I**: Interface Segregation Principle
  - **D**: Dependency Inversion Principle

**Keuntungan Menggunakan OOP**:
1. Parallel Development : Setiap developer dapat bekerja pada berkas kode (class) masing-masing tanpa saling mengganggu.
2. Reusability : Kode atau class yang sudah dibangun dapat digunakan kembali di proyek lain.
3. Pengelolaan Kode yang Lebih Mudah : Dengan OOP, kode lebih terstruktur dan mudah dikelola karena mengikuti kaidah yang sudah ada.