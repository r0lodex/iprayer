var statenames = [
{ "code": "jhr", "name": "Johor"},
{ "code": "kdh", "name": "Kedah" },
{ "code": "ktn", "name": "Kelantan" },
{ "code": "mlk", "name": "Melaka" },
{ "code": "ngs", "name": "Negeri Sembilan" },
{ "code": "phg", "name": "Pahang" },
{ "code": "prk", "name": "Perak" },
{ "code": "pls", "name": "Perlis" },
{ "code": "png", "name": "Pulau Pinang" },
{ "code": "sbh", "name": "Sabah" },
{ "code": "swk", "name": "Sarawak" },
{ "code": "sgr", "name": "Selangor" },
{ "code": "trg", "name": "Terengganu" },
{ "code": "wlp", "name": "Wilayah Persekutuan "} ;

var statedetails =  {
    "jhr": ["Batu Pahat", "Gemas", "Johor Bahru", "Kluang", "Kota Tinggi", "Mersing", "Muar", "Pemanggil", "Pontian", "Pulau Aur", "Segamat"],
    "kdh": ["Baling", "Bandar Baharu", "Kota Setar", "Kuala Muda", "Kubang Pasu", "Kulim", "Langkawi", "Padang Terap", "Pendang", "Puncak Gunung Jerai", "Sik", "Yan"],
    "ktn": ["Bachok", "Bertam", "Jeli", "Kota Bharu", "Kuala Krai", "Machang", "Mukim Chiku", "Mukim Galas", "Pasir Mas", "Pasir Puteh", "Tanah Merah", "Tumpat"],
    "mlk": ["Alor Gajah", "Bandar Melaka", "Jasin", "Masjid Tanah", "Merlimau", "Nyalas"],
    "ngs": ["Jelebu", "Jempol", "Kuala Pilah", "Port Dickson", "Rembau", "Seremban", "Tampin"],
    "phg": ["Bentong", "Bera", "Bukit Fraser", "Cameron Highland", "Chenor", "Genting Highlands", "Jerantut", "Kuala Lipis", "Kuantan", "Maran", "Muadzam Shah", "Pekan", "Pulau Tioman", "Raub", "Rompin", "Temerloh"],
    "prk": ["Bagan Datoh", "Bagan Serai", "Batu Gajah", "Belum", "Beruas", "Bukit Larut", "Grik", "Ipoh", "Kampar", "Kampung Gajah", "Kuala Kangsar", "Lenggong", "Lumut", "Parit", "Parit Buntar", "Pengkalan Hulu", "Pulau Pangkor", "Selama", "Setiawan", "Slim River", "Sri Iskandar", "Sungai Siput", "Taiping", "Tanjung Malim", "Tapah", "Teluk Intan", "Temengor"],
    "pls": ["Arau", "Kangar", "Padang Besar"],
    "png": ["Pulau Pinang"],
    "sbh": ["Balong", "Bandar Bukit Garam", "Beaufort", "Beluran", "Gunung Kinabalu", "Kalabakan", "Keningau", "Kota Belud", "Kota Kinabalu", "Kota Marudu", "Kuala Penyu", "Kuamut", "Kudat", "Kunak", "Lahat Datu", "Long Pa Sia", "Membakut", "Merotai", "Nabawan", "Papar", "Penampang", "Pensiangan", "Pinangah", "Pitas", "Pulau Banggi", "Ranau", "Sahabat", "Sandakan", "Semawang", "Semporna", "Silabukan", "Sipitang", "Tambisan", "Tambunan", "Tawau", "Telupit", "Temanggong", "Tenom", "Terusan", "Tuaran", "Tungku", "Weston"],
    "swk": ["Bau", "Bekenu", "Belaga", "Belawai", "Belingan", "Betong", "Bintulu", "Bitangor", "Dalat", "Daro", "Debak", "Engkelili", "Igan", "Julau", "Kabong", "Kanowit", "Kapit", "Kuching", "Lawas", "Limbang", "Lingga", "Lundu", "Marudi", "Matu", "Meludam", "Miri", "Niah", "Oya", "Pusa", "Rajang", "Roban", "Samarahan", "Saratok", "Sarikei", "Sebauh", "Sebuyau", "Sematan", "Serian", "Sibu", "Sibuti", "Simunjan", "Song", "Spaoh", "Sri Aman", "Sundar", "Tatau", "Terusan"],
    "sgr": ["Gombak", "Hulu Langat", "Hulu Selangor", "Klang", "Kuala Langat", "Kuala Selangor", "Petaling", "Rawang", "Sabak Bernam", "Sepang", "Shah Alam"],
    "trg": ["Besut", "Hulu Terrenganu", "Kemaman Dungun", "Kuala Terengganu", "Marang", "Setiu"],
    "wlp": ["Kuala Lumpur", "Labuan", "Putrajaya"]
};

