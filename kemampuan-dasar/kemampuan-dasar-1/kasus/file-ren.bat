@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

echo "Cari File"
FOR /R %%a IN (*.java) DO (
	echo "%%a ada"
	set /P ubah=diubah namanya Y/T? 
	IF /I !ubah!==y (
		set /p ubahNama=Input nama file baru :
		ren "%%a" "!ubahNama!.java"		
	)
)

pause

FOR /R %%a IN (*.java) DO (
	echo "nama file diubah %%a"
)

pause