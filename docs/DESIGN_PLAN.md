# Designový plán pro AI Mapa Landing Page

## Cíl
Vytvořit moderní, profesionální a responzivní landing page pro AI Mapa, která efektivně komunikuje hodnotu produktu a přesvědčí uživatele k registraci nebo vyzkoušení zdarma.

## Barevné schéma
- Primární barva: Modrá (#3B82F6 - blue-500)
- Sekundární barva: Tyrkysová (#14B8A6 - teal-500)
- Gradient: `bg-gradient-to-r from-blue-500 to-teal-500`
- Pozadí: Světle modré až tyrkysové přechody
- Text: Tmavě šedá (#333) pro hlavní text, světle šedá (#718096) pro sekundární text

## Typografie
- Font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif (systémové fonty pro rychlost načítání)
- Nadpisy: Tučné, velké písmo s gradientovým efektem
- Odstavce: Čitelné velikosti s dostatkem mezery

## Layout a struktura

### 1. Hlavička (Header)
- Sticky navigace
- Logo s názvem "AI Mapa" a ikonou
- Navigační odkazy (Funkce, Výhody, Kontakt)
- Tlačítko "Začít plánovat"
- Mobilní menu pro menší obrazovky

### 2. Hero sekce
- Ústřední nadpis: "Revoluce v mapování s AI"
- Popisný text o produktu
- Dvě tlačítka: "Vyzkoušet zdarma" a "Zjistit více"
- Animovaný náhled produktu s plovoucími elementy

### 3. Sekce s funkcemi
- Čtyři klíčové funkce produktu:
  1. Automatické plánování
  2. Inteligentní vizualizace
  3. Chatové rozhraní
  4. Hlasové ovládání
- Každá funkce má ikonu, název a popis
- Karty s efektem při najetí myší

### 4. Sekce s výhodami
- Seznam klíčových výhod produktu s ikonami zaškrtnutí
- Hodnocení produktu (hvězdy)
- Mockup chatového rozhraní ukazující interakci s AI

### 5. Sekce s kontakty
- Kontaktní informace (telefon, email)
- Tlačítko "Vyzkoušet zdarma"

### 6. Patička (Footer)
- Odkazy na sekce (Produkt, Podpora, Společnost)
- Copyright informace

## Interakce a animace
- Plynulé přechody mezi stavy (hover efekty)
- Animace při scrollování
- Plovoucí elementy v hero sekci
- Smooth scrolling pro navigaci
- Transformace tlačítek při najetí myší

## Responzivita
- Mobile-first přístup
- Breakpointy pro různé velikosti obrazovek
- Flexbox a Grid layouty
- Přizpůsobení velikosti textu a obrázků pro mobilní zařízení

## Ikony
- Použití Lucide React ikon pro konzistentní vizuální styl
- Barevné ikony odpovídající barevnému schématu

## Komponenty
1. `LandingPageV2.tsx` - Hlavní komponenta landing page
2. `Header.tsx` - Hlavička s navigací
3. `HeroSection.tsx` - Hero sekce
4. `FeaturesSection.tsx` - Sekce s funkcemi
5. `BenefitsSection.tsx` - Sekce s výhodami
6. `ContactSection.tsx` - Sekce s kontakty
7. `Footer.tsx` - Patička

## Styly
- Hlavní styly přes Tailwind CSS třídy
- Dodatečné CSS v `LandingPageV2.css` pro specifické animace
- Glass morphism efekty v hlavičce
- Stíny a gradienty pro hloubku

## Integrace
- Propojení s React Routerem pro navigaci
- Odkazy na dashboard pro registraci/vyzkoušení
- Scrollování k různým sekcím při kliknutí na navigační odkazy