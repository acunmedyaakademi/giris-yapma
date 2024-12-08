// Kullanıcı Listesi Tanımlama: Başlangıçta users dizisinde bazı kullanıcılar tanımlanır.
// İşlem Seçimi: Kullanıcıdan "giriş", "kayıt" veya "çık" seçeneklerinden birini seçmesi istenir.
// Giriş Yapma: Kullanıcı adı ve şifre girilerek, sistemdeki kullanıcılarla karşılaştırılır. Eğer doğruysa giriş başarılıdır.
// Kayıt Olma: Yeni bir kullanıcı adı ve şifre ile kayıt yapılır. Ancak, kullanıcı adı daha önce alınmışsa, başka bir ad seçmesi istenir.
// Çıkış Yapma: "Çık" komutu ile program sonlanır.

// Giriş yap / Çıkış yap / Kayıt ol sorulsun
// giriş yaparsa eğer
// 1. Kullanıcı Adı
// 2. Sifre
// bunlar var ise konsola giriş yapıldı diye mesaj yazılsın
// 3. kayıt olsa eğer
// 1. kullanıcı adı istensin prompt ile
// 2. sifre istensin 
// 3. bu bilgiler bir obje şeklinde dizeye pushlansın

let users = [
    {
        kullaniciAdi : "Eagledeagle",
        sifre : 12345,
    },
    {
        kullaniciAdi : "onureyiz61",
        sifre : 619948
    },
]
const soru = prompt("Giriş yap / Çıkış yap / Kayıt ol");
for (const user of users) {
    
    if(soru === ("Giriş yap").toLowerCase()){
        kullaniciAdi = prompt("Kullanici adi:");
        sifre = Number(prompt("Sifre:"));
     if(user.kullaniciAdi.toLowerCase() === kullaniciAdi.toLowerCase() && user.sifre === sifre){
        console.log("Giriş başarılı");
    }else{
        console.log("Kullanıcı adı Şifre hatalı.");
    }
    }else if(soru === ("Kayıt ol").toLowerCase()){
        kullaniciAdi = prompt("Kullanici adi:");
        sifre = Number(prompt("Sifre:"));
        yeniKullanici ={
            kullaniciAdi: kullaniciAdi,
            sifre: sifre,
        }
        users.push(yeniKullanici);
        console.log(users);
        console.log("Kayıt Başarılı");
        
        break;
    }else if(soru === ("Çıkış yap").toLowerCase()){
        console.log("Başarıyla çıkış yaptınız.");
        
    }
    else{
        console.log("hatalı işlem yaptınız. Tekrar deneyiniz!");
        
    }

}