const contacts=require("./contacts")

const main = async()=>{
    const nama =await contacts.tulisPertanyaan("Masukkan Nama Anda: ");
    const email=await contacts.tulisPertanyaan("Masukkan Email Anda: ")
    const NoHp=await contacts.tulisPertanyaan("Masukkan NoHP Anda: ")
    contacts.simpanContact(nama,email,NoHp)
};
main();
