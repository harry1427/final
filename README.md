# 前端程式設計期末報告

## 主題及發想

 &emsp;&emsp;我在這學期修習一門物理系必修的力學，在學期的最後主要在討論狹義相對論，而我認為相對論中有許多有趣的性質會在人類接近光速旅行時變得明顯，所以在查詢相關資料後，大至整理做成一份簡易的科普網站，希望對這個主題有興趣的人可以透過這個網站了解，甚至和我討論。

## 網頁的開始-進入主介面前的畫面

   &emsp;&emsp;起初，想挑戰用jquery製作動畫效果，讓瀏覽這個網頁的人可以直接從動畫中了解相對論下的效應。不過，我對於jquery還不是很熟悉，加上相對論的動畫太過複雜，實在很難用js直接做出一個動畫，所以我想說放棄用動畫講解，改用three.js做出一個類斯太空穿梭的效果。
   &emsp;&emsp;這個效果是我參考[3D Space Warp JavaScript Effect - Three.js Tutorial](https://redstapler.co/space-warp-background-effect-three-js/)的[影片教學](https://www.youtube.com/watch?v=Bed1z7f1EI4&feature=emb_title)製作的，雖然說code中一大部分是照著教學打上去，不過在過程中也遇上一些問題，所以我大致去了解three.js的操做，再試著去解決問題(問題統一寫在"遇上的問題"中)。

   使用[Font Meme](https://fontmeme.com/star-wars-font/)製作類似star wars的字體。

## 主要的網頁
網頁的外觀主要是參考[Google Earth](https://www.google.com/intl/zh-TW/earth/#main)，因為我認為他看起來乾淨整潔。

在footer中加入copyrigth的告示，且使用new Date抓取當年的西元數字，以便每年隨時更新。

## 遇上的問題

   1. 在製作start的space wrap效果時，我想試著three.js的cnavas中加入背景圖，不過發現只是使用css的background性質無法顯示，背景圖片總會被canvas覆蓋，如果想加入一張星空之類的照片當作背景，似乎需要修改three.js的texture性質，所以最終放棄這個想法。
   
   2. three.js中load插入的圖片就算已去背，在網頁中還是會有不透明的背景，造成星星是方形的形狀，而非單純的圓型，這點卡了我半天，我上網找資料，但因為大多是英文且是我還不是很熟悉的three.js性質，所以沒有弄清，最終在一部講解three.js的影片中找到解決方法，直接在load的funtion下加入"transparent:true"即可去背。
   3. 如果只是在htnl上加入div，會發生div的物件被canvas覆蓋的情形，想要在canvas上顯示div物件就需要加入position:absolute的性質，才可以顯示div物件。
   4. 我想使用iframe外插youtube上的影片，不過在網頁上會顯示無法播放影片，上網查到的解釋是說影片的擁有人並未開放使用嵌入功能，最終我是選擇另一部效果較差的影片貼在網頁上。。



   [JSON - Working with Data and APIs in JavaScript](https://www.youtube.com/watch?v=uxf0--uiX0I)[Setting background-image using jQuery CSS property](https://stackoverflow.com/questions/512054/setting-background-image-using-jquery-css-property)
   在病警鐘加上RWD的功能


   製作popup時可以有使用hide、show的 方式和在css.元素中加入hidden性質的方式[JQuery製作點擊Button出現Modal效果](https://codepen.io/amanda328/pen/pOVMgY)

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/harry1427/final/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
