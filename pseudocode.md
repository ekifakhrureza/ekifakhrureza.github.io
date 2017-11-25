MASUKKAN sebuah nama pada 'nama'
MASUKKAN sebuah hari kerja pada 'hari'
SIMPAN 'harlow'
SIMPAN senin : array [1...3] of string
SIMPAN selasa : array [1...3] of string
SIMPAN rabu : array [1...5] of string
SIMPAN kamis : array [1...3] of string 
SIMPAN jumat : array [1...2] of string 
IF 'nama' tidak sama dengan null dan tidak sama dengan "" THEN:
	TULISKAN "Halo 'nama'"
ENDIF
IF 'hari' tidak sama dengan null dan tidak sama dengan "" THEN:
	SIMPAN 'harlow' dengan 'hari' yang setiap huruf diubah menjadi huruf kecil
	BUAT fungsi todolist()
	CEK harlow di dalam fungsi todolist()
		IF 'harlow' sama dengan 'senin' THEN:
			FOR setiap pertambahan 1 pada 'index' dari 0 sampai panjang dari senin[]:
				TULISKAN "Hari 'harlow' kita akan mempelajari :"	
				TULISKAN senin[index]
			ENDFOR	
		ELSE IF 'harlow' sama dengan 'selasa' THEN:
			FOR setiap pertambahan 1 pada 'index' dari 0 sampai panjang dari selasa[]:
				TULISKAN "Hari 'harlow' kita akan mempelajari :"
				TULISKAN selasa[index]
			ENDFOR		
		ELSE IF 'harlow' sama dengan 'rabu' THEN:
			FOR setiap pertambahan 1 pada 'index' dari 0 sampai panjang dari rabu[]:
				TULISKAN "Hari 'harlow' kita akan mempelajari :"
				TULISKAN rabu[index]
			ENDFOR		
		ELSE IF 'harlow' sama dengan 'kamis' THEN:
			FOR setiap pertambahan 1 pada 'index' dari 0 sampai panjang dari kamis[]:
				TULISKAN "Hari 'harlow' kita akan mempelajari :"
				TULISKAN kamis[index]
			ENDFOR			
		ELSE IF 'harlow' sama dengan 'jumat' THEN:
			FOR setiap pertambahan 1 pada 'index' dari 0 sampai panjang dari jumat[]:
				TULISKAN "Hari 'harlow' kita akan mempelajari :"
				TULISKAN jumat[index]
			ENDFOR
		ELSE:
			TULISKAN "Kamu memasukkan input di luar hari senin-jumat !"
			TULISKAN "Silahkan jalankan ulang program !"
		ENDIF
	PANGGIL fungsi todolist()
ENDIF	