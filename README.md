# 前端程式設計期末報告

## 一、主題及發想

 &emsp;&emsp;我在這學期修習一門物理系必修的力學，在學期的最後主要在討論狹義相對論，而我認為相對論中有許多有趣的性質會在人類接近光速旅行時變得明顯，所以在查詢相關資料後，大致整理做成一份簡易的科普網站，希望對這個主題有興趣的人可以透過這個網站了解，甚至和我討論。

## 二、網頁介紹

### 開始頁面-進入主介面前的畫面

   &emsp;&emsp;起初，想挑戰用jquery製作動畫效果，讓瀏覽這個網頁的人可以直接從動畫中了解相對論下的效應。不過，我對於jquery還不是很熟悉，加上相對論的動畫太過複雜，實在很難用js直接做出一個動畫，所以我想說放棄用動畫講解，改用three.js做出一個類似太空穿梭的效果，當作科普網站的開始頁面。
   &emsp;&emsp;這個效果是我參考[3D Space Warp JavaScript Effect - Three.js Tutorial](https://redstapler.co/space-warp-background-effect-three-js/)的[影片教學](https://www.youtube.com/watch?v=Bed1z7f1EI4&feature=emb_title)製作的，雖然說code中一大部分是照著教學打上去，不過在大致懂得製作方式後，我加上了可以隨螢幕大小變化的canvas，這麼一來three.js匯出的圖檔，就可以變換大小，除此之外，我加上div的點擊畫面，讓頁面不是只有單純的動畫效果，多了一些色彩和變化。
   &emsp;&emsp;開始頁面上使用[Font Meme](https://fontmeme.com/star-wars-font/)製作類似star wars的字體。

### 主要網頁

   &emsp;&emsp;網頁的外觀主要是參考[Google Earth](https://www.google.com/intl/zh-TW/earth/#main)，因為我認為他看起來乾淨整潔。

   &emsp;&emsp;利用之前製作個人網頁時所學到的navbar還有contact，使用scss撰寫完成外觀。背景的圖片是使用nasa的api key從官方網站抓取nasa的每日一圖，所以他會每日更新背景畫面。
   &emsp;&emsp;在introduction和navbar上的button使用到jquery製作簡單的popup效果，因為我付上的影片較多，所以在popup跳出的部分中，使用css的overflow性質，做成滑動式的。附上內容使用的嵌入功能家道程式碼中。
   &emsp;&emsp;在footer中加入copyrigth的告示上，使用new Date抓取當年的西元數字，以便每年隨時更新。
   &emsp;&emsp;我想在網頁中加上一些方程式，所以使用加密的CDN連結MathJax。

## 三、遇上的問題

   1. 在製作start的space wrap效果時，我想試著three.js的cnavas中加入背景圖，不過發現只是使用css的background性質無法顯示，背景圖片總會被canvas覆蓋，如果想加入一張星空之類的照片當作背景，似乎需要修改three.js的texture性質，所以最終放棄這個想法。
   2. three.js中load插入的圖片就算已去背，在網頁中還是會有不透明的背景，造成星星是方形的形狀，而非單純的圓型，這點卡了我半天，我上網找資料，但因為大多是英文且是我還不是很熟悉的three.js性質，所以沒有弄清，最終在一部講解three.js的影片中找到解決方法，直接在load的funtion下加入"transparent:true"即可去背。
   3. 如果只是在html上加入div，會發生div的物件被canvas覆蓋的情形，想要在canvas上顯示div物件就需要加入position:absolute的性質，才可以顯示div物件。
   4. 我想使用iframe外插youtube上的影片，不過在網頁上會顯示無法播放影片，上網查到的解釋是說影片的擁有人並未開放使用嵌入功能，最終我是選擇另一部效果較差的影片貼在網頁上。
   5. nasa的每日一圖有時會是影片，並非圖片，所以我在發現後，在城市中洩入if else當我設定的var無法從json中抓舉到圖片檔時(undefined)，會另行抓取另一張圖片。


## 四、心得
   
   &emsp;&emsp;對於這次的期末報告，我自己看來不是很滿意，我認為自己並沒有花上心思，將它當作一份期末報告製作，所以有準備時間不足何未主動去學習課外的程式的問題。尤其在看了同學demo後，發現我選的主題沒有太多發揮空間，並且我忽略了重點是製作一份前端程式相關的作品，而非課外知識的介紹，不該花上太多時間在查詢網頁內容(相對論)的知識。檢討過後，我想自己在這學期的課程中，學習到許多前端程式的使用方法，但還不會應用，不過，在這堂課中，我了解到前端程式十分有趣，希望自己可以多練習、做些作品來增進自己的能力。



   

