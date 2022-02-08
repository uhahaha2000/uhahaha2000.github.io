---
layout: post
title: Device Pixel Ratio
tags: [device-pixel-ratio, ]
excerpt_separator: <!--more-->
---

# device-pixel-ratio 계산 | mobile
device-pixel-ratio : 단말기의 화소와 실제 화면의 pixel간의 비율

> [!NOTE] 1334 x 750 픽셀 해상도 (326ppi)

## 장치와 픽셀 비율 계산
1. 장치가 유지외는 길제 거리와 참고 픽셀의 거리를 비교

![calculate device Pixel Ratio]({{ site.baseurl }}/assets/img/calculate-devicePixelRatio.png)

2. 28인치에서 이상적인 밀도는 '인치 당 96픽셀' 이다. (표준 밀도 96dpi) 그러나 스마트폰은 노트북을 들고 다니는 것보다 디바이스를 얼굴에 가깝게 들고 있는다. 그 거리를 18인치로 추정
   > * idealPixelDensity = (28/18) * 96 = 150 픽셀 / 인치 (대략)
3. 물리적 픽셀 밀도와 이상적인 픽셀 밀도의 비율을 이용하여 장치 픽셀 비율을 얻는다. (반올림)
   >  * devicePixelRatio = 326/150 = 2.17 => 반올림 => 2 
    
    
## device-width, device-height
예를 들어, 기기의 해상도가 1334 x 750  
> - device-width : 750 / 2 = 375
> - device-height : 1334 / 2 = 667



출처 :   
[https://www.html5rocks.com/en/mobile/high-dpi/#disqus_thread](https://www.html5rocks.com/en/mobile/high-dpi/#disqus_thread){: target="_blank"}  
[https://feel5ny.github.io/2018/05/13/mediaQuery_01/](https://feel5ny.github.io/2018/05/13/mediaQuery_01/){: target="_blank" }  
[https://bjango.com/articles/min-device-pixel-ratio/](https://bjango.com/articles/min-device-pixel-ratio/){: target="_blank" }
 
