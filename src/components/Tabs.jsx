import React, { useState } from 'react';
import first from '../foto/1.jpg';
import second from '../foto/2.jpg';
import thirt from '../foto/3.webp';
import four from '../foto/4.jpeg';
import five from '../foto/5.jpg';



const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: '#Gündem',
            img: <img src={first} alt="Logo" />,
            title: '🔹Gündem',
            time: "20 ocak 2023",
            content: 'Stefan Kuntz a ödenecek tazminat belli oldu.',
          
            img2: <img src={second} alt="Logo" />,
            title2: '🔹Gündem',
            content2: 'Musul’daki düğün salonu yangınının yeni görüntüleri ortaya çıktı',
        
            img3: <img src={thirt} alt="Logo" />,
            title3: '🔹Gündem',
            content3: 'Son 21 yılda toplam 255 milyar dolar uluslararası yatırım çekmiş ',

            img4: <img src={four} alt="Logo" />,
            title4: '🔹Gündem',
            content4: ' bir ülke olarak, önümüzdeki dönemde sermaye piyasalarımızın daha da derinleştirilmesine',

            img5: <img src={five} alt="Logo" />,
            title5: '🔹Gündem',
            content5: 'tabana yayılmasına özel önem ve öncelik vereceğiz" dedi.',
        
        },

        {
            id: 2,
            tabTitle: '#Spor',
            img: <img src={first} alt="Logo" />,
            title: '🔹Spor',
            time: "20 ocak 2023",
            content: 'Eski karısıyla sarmaş dolaş olunca ortalık karıştı',

            img2: <img src={second} alt="Logo" />,
            title2: '🔹Spor',
            content2: 'Cumhurbaşkanı Recep Tayyip Erdoğan, bu yıl 7ncisi düzenlenenntent.',

            img3: <img src={thirt} alt="Logo" />,
            title3: '🔹Spor',
            content3: 'Türkiye Sermaye Piyasaları Kongresine gönderdiği mesajda, Cumhuriyetin ikinci yüzyılında',

            img4: <img src={four} alt="Logo" />,
            title4: '🔹Spor',
            content4: 'Güçlü Sermaye Piyasaları; Güçlü Türkiye',
            
            img5: <img src={five} alt="Logo" />,
            title5: '🔹Spor',
            content5: 'üm yatırımcılar için hayırlı olmasını diledi.',
        },

        {
            id: 3,
            tabTitle: '#Siyaset',
            img: <img src={first} alt="Logo" />,
            title: '🔹Siyaset',
            time: "20 ocak 2023",
            content: 'Bilim insanları bu sorulara yanıt arıyor',

            img2: <img src={second} alt="Logo" />,
            title2: '🔹Siyaset',
            content2: 'Cumhuriyetin yüzüncü yılında daha güçlü',

            img3: <img src={thirt} alt="Logo" />,
            title3: '🔹Siyaset',
            content3: 'güvenli ve daha müreffeh ',

            img4: <img src={four} alt="Logo" />,
            title4: '🔹Siyaset',
            content4: ' Türkiye hedefiyle çıktıkları yolda durmadan, dinlenmeden yürüdüklerini',
            
            img5: <img src={five} alt="Logo" />,
            title5: '🔹Siyaset',
            content5: 'Erdoğan, Türkiye Yüzyılının yol haritası mahiyetinde olan ',
        },

        {
            id: 4,
            tabTitle: '#Bursa',
            img: <img src={first} alt="Logo" />,
            title: '🔹Bursa',
            time: "20 ocak 2023",
            content: 'Arkadaşının kocasıyla olmak bana şirin gelmedi!',

            img2: <img src={second} alt="Logo" />,
            title2: '🔹Bursa',
            content2: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',

            img3: <img src={thirt} alt="Logo" />,
            title3: '🔹Bursa',
            content3: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',

            img4: <img src={four} alt="Logo" />,
            title4: '🔹Bursa',
            content4: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
            
            img5: <img src={five} alt="Logo" />,
            title5: '🔹Bursa',
            content5: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
        },

        {
            id: 5,
            tabTitle: '#Seçim',
            img: <img src={first} alt="Logo" />,
            title: '🔹Seçim',
            time: "20 ocak 2023",
            content: 'Memur, emekli, asgari ücretli, kiracılar... Milyonlarca kişi enflasyon verisine odaklandı.',

            img2: <img src={second} alt="Logo" />,
            title2:  '🔹Seçim',
            content2: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',

            img3: <img src={thirt} alt="Logo" />,
            title3:  '🔹Seçim',
            content3: ' Orta Vadeli Programı, eylül ayı başında kamuoyu ',

            img4: <img src={four} alt="Logo" />,
            title4: '🔹Seçim',
            content4: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
            
            img5: <img src={five} alt="Logo" />,
            title5:  '🔹Seçim',
            content5: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
        },

        {
            id: 6,
            tabTitle: '#Bursaspor',
            img: <img src={first} alt="Logo" />,
            title:  '🔹Bursaspor',
            time: "20 ocak 2023",
            content: 'Türkiye İstatistik Kurumu yarın Eylül ayına ilişkin enflasyon oranlarını açıklayacak',

            img2: <img src={second} alt="Logo" />,
            title2: '🔹Bursaspor',
            content2: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',

            img3: <img src={thirt} alt="Logo" />,
            title3: '🔹Bursaspor',
            content3: 'iş dünyasıyla paylaştıklarını anımsattı.',

            img4: <img src={four} alt="Logo" />,
            title4: '🔹Bursaspor',
            content4: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
            
            img5: <img src={five} alt="Logo" />,
            title5: '🔹Bursaspor',
            content5: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
        },

        {
            id: 7,
            tabTitle: '#Sağlık',
            img: <img src={first} alt="Logo" />,
            title: '🔹Sağlık',
            time: "20 ocak 2023",
            content: 'Aylık yüzde 4ün üzerinde enflasyon beklentisi',

            img2: <img src={second} alt="Logo" />,
            title2: '🔹Sağlık',
            content2: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',

            img3: <img src={thirt} alt="Logo" />,
            title3: '🔹Sağlık',
            content3: 'Milletin de desteğiyle bu hedefleri gerçekleştireceklerine inandıklarını',

            img4: <img src={four} alt="Logo" />,
            title4: '🔹Sağlık',
            content4: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
            
            img5: <img src={five} alt="Logo" />,
            title5: '🔹Sağlık',
            content5: 'dadasdasdasdarray de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div className='content-inside' key={i}>
                        {currentTab === `${tab.id}` && <div className='content-inside-1'><p>{tab.img}</p><p className='title'>{tab.title}<div>{tab.time}</div></p><p className='text-header'>{tab.content}</p></div>}
                        {currentTab === `${tab.id}` && <div className='content-inside-1'><p>{tab.img2}</p><p className='title'>{tab.title2}<div>{tab.time}</div></p><p className='text-header'>{tab.content2}</p></div>}
                        {currentTab === `${tab.id}` && <div className='content-inside-1'><p>{tab.img3}</p><p className='title'>{tab.title3}<div>{tab.time}</div></p><p className='text-header'>{tab.content3}</p></div>}
                        {currentTab === `${tab.id}` && <div className='content-inside-1'><p>{tab.img4}</p><p className='title'>{tab.title4}<div>{tab.time}</div></p><p className='text-header'>{tab.content4}</p></div>}
                        {currentTab === `${tab.id}` && <div className='content-inside-1'><p>{tab.img5}</p><p className='title'>{tab.title5}<div>{tab.time}</div></p><p className='text-header'>{tab.content5}</p></div>}

                    </div>
                    
                )}
            </div>
        </div>
    );
}

export default Tabs;
