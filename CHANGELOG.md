# <b>SRTO CHANGELOG</b>
> [!NOTE]
> This changelog contains a brief overview of what has changed in every new version. I might miss sometimes something, but the most things should be in here.

> [!IMPORTANT]
> ### **This project is still under full development. You may encounter bugs!**
> #### _If you encounter any bugs or have any suggestions for improvements, let me now by writing a post into the forum thread or by opening an issue in the github repository. This will help me a lot!_

## **Version 0.5.0 | MAJOR UPDATE**
Released on 02.10.2026
#### Overview: A new hub for small tools like SRTO: SimRail-Expert
With this version, the SRTO is no longer available on *GitHub Pages*. It now runs on its own platform, which gives me more control over the website and its content.
The SRTO is also part of, and the beginning of, a future idea: the newly founded domain **SimRail-Expert**.

### 🌐 What is *SimRail-Expert*?
**SimRail-Expert** is planned to become a small hub for tools like the SRTO, plus a few other small additions, for example a "*Signals Guide*".
These additions and planned tools are still in development, so the SRTO is the only available tool for now. But stay tuned for what's to come!

### 🔌 SimRail-Expert's own API
The new hosting also makes it possible to run a self-hosted API endpoint, which provides the SRTO and future tools with additional information.
> [!WARNING]
> The API endpoint is only allowed to be used by tools hosted at simrail-expert.de
> External usage from other websites is forbidden!

### <u>Major Changes</u>

#### 🚆 Timetable Delta Time
- New Feature: **Timetable Delta Time** is now visible right on the train
- Due to this new feature, all existing map elements had to be remade to better align with the now "longer" trains
- With that, the previous two screens have now been split into four screens:
  - **S1:** Katowice <-> Włoszczowa Północ
  - **S2:** Włoszczowa Północ <-> Warszawa
  - **S3:** Sędzice <-> Łódź North / Gałkówek *(not completely finished yet)*
  - **S4:** Rozprza <-> Pruszków

#### 🖥️ UI Rework
- The UI has finally been reworked to its full potential
  - The currently selected screen is now visible in the header, with the clock aligned to the right
  - The selection of **Screens** and **Servers** is still in panels, but now aligned to the right underneath the button itself
    - The screen list now shows the start and end of the screen, as well as a brief overview of the route the screen covers
    - Available servers are now categorized into "*Polski*", "*German*", "*International*", and "*Additional Server*"
    - Each server now also shows the current number of players in trains and stations, as well as the overall player usage on the server in percent

#### 🤓 Some nerdy information
A lot of performance changes have been made in the background.
- Tracks are now custom commands parsed into Canvas `Path2D`
- Annotations are now bundled into one element instead of several elements in one list
- This saves a lot of lines in the data files
- The data files are also "chunked" out to reduce the overall size of the main script file

### <u>Additional Changes</u>

#### **All screens now have a different look due to the new, larger track layout**

#### 1️⃣ Screen 1 — Katowice <-> Włoszczowa Północ
- Added a short section of **LK138** towards Szabelnia / Mysłowice
- Tracks between **DG** and **DZA** are now "shifted" to better represent the placement of signals and platforms as they are in the game

#### 2️⃣ Screen 2 — Włoszczowa Północ <-> Warszawa
- Added station "*Żyrardów*" to the screen
- Reworked station "*Grodzisk Mazowiecki*"
- Reworked station "*Pruszków*"
#### 3️⃣ Screen 3 — Sędzice <-> Gałkówek
- The **Łódź North** region has been added to this screen. It's positioned below the rest of the screen.
  - The additional track between **Kutno** and **Łowicz Główny** will be added in a later update
- Reworked the APO "*Męka*"
- Reworked the APO "*Kolumna*" and "*Dobroń*"
- Reworked "*Łódź Kaliska*"
- Reworked "*Łódź Widzew*"

#### 4️⃣ Screen 4 — Rozprza <-> Pruszków
- **Rozprza** and **Piotrków Trybunalski** are now next to each other
- **Koluszki** and **Skierniewice** have been re-created from the ground up. Some differences are still there, but they are not very noticeable
- **Grodzisk Mazowiecki** and **Pruszków** have been added to the screen

### <u>Bugs Fixed</u>

### <u>Roadmap</u>
All future plans are tracked on the <a href='https://trello.com/b/GOW2Mzpf/simrail-expertde'>SRTO Trello Board</a>.

## **Version 0.4.0-alpha | MAJOR UPDATE**
Released on 23.07.2026
#### Overview: Pre-Finished Screen "Łódź Voivodeship", Player Names and more!
> **Note:** This is an early release after a two-month gap. Some features may be incomplete or contain minor bugs. Thank you for your patience!

### <u>Major Changes</u>
The **"Łódź Voivodeship"** screen has received a significant update and is nearing completion. Further changes are expected in upcoming updates as part of the planned track expansion (see Roadmap).

The **train hover tooltip** now displays the name of the player currently driving the train. Dispatcher names for stations will follow in a future update, where they will be shown in a dedicated station information tooltip.

### <u>Additional Changes</u>
- Reworked signal box symbols
    - Signal boxes now render with proper rotation, matching the orientation of the dispatcher's panel
- Added a <i>"New Version"</i> notification for returning users on each new release — first-time visitors will not see this notification

### <u>Bugs Fixed</u>
- Added missing label *"Józefinów"*
- Added missing switch at Łódź Lublinek
- Corrected position of the Opoczno Południe signal box
- Added missing passing opportunity *"Łódź Radogoszcz Zachód"* between Łódź Żabieniec and Zgierz
- Replaced *"to Koluszki"* and *"to Gałkówek"* labels with passing opportunity *"Żakowice"*

### <u>Roadmap</u>
Upcoming updates will bring significant reworks to tracks on the first and second screens as part of a planned expansion from 60px to 100px track width — enabling future features such as train delay visualization. This wider layout is already visible around Koluszki and continuing towards Żyrardów.

A dedicated **train information window** is also planned: clicking a train will open a movable popup with full details, including the signal view, that persists while you continue using the map.

All future plans are tracked on the <a href='https://trello.com/b/GOW2Mzpf/simrail-expertde'>SRTO Trello Board</a>.

## **Version 0.3.2-alpha | Small fixes**
Released on 25.05.2026
#### Overview: Small fixes on the available Łódź Area
### <u>Changes</u>
- added missing platforms between Sedzice and Pabianice - stretched top row all the way to the right
- added missing platforms of *"Pabianice Pólnocne"*, *"Łódź Retkinia"* and *"Łódź Pabianicka"*
- fixed Rozprza station Name and info text "to Gałkówek"
- switched signals *2426_LCH_F* and *2426_LCH_E*

## **Version 0.3.1-alpha | HOTFIX**
Released on 16.05.2026
### <u>Changes</u>
- fixed wrong positions of nodes in the Łódź Area aswell as station names of `Łazy` and `Łazy Łc` if the screen is flipped
- added a `Controlled by Łódź Widzew` node to Łódź Marysin and adjusted the positions of those

## **Version 0.3.0-alpha**
#### Overview: New Screen "Łódź Voivodeship", Feature "Flip Screen" and some fixes
Update released on 16.05.2026
### <u>Major Changes</u>
A new screen has been added. It's observing the **Łódź Voivodeship**, currently expanding towards Koluszki</br>
A new feature "Flip Screen" has been added in the options. This will flip the whole screen to align better with dispatching panels.</br>

Logic is now checking whether there might be a possible next signal if no signal is given in the data. This is important for the Lodz Voivodeship area. The distance between several signals expands over 5 kilometers, which results `SignalInFront` beeing `null` in the data. This prediction of the next signal is not 100% correct.</br>
Left track usage can't be predicted. As soon as the train has a signal in the data, it's corrected automatically.
### <u>Additional Changes</u>
- reworked the settings a little bit
    - moved the Change Server button directly into the header
    - I will probably change it again in the next update. I'm not happy at all with it.
- added a `Change Screen` button

**Track Changes:**
- small changes on border tracks
- added the entry signal for Sosnowiec Dandowka so the train at least doesn't dissapear if leaving Sosnowiec Poludniowy
- added Dabrowa Gornicza Huta Katowice onto Dabrowa Gornicza Zabkowice
- again added missing platforms between DZ and LC (peron 2 for Sikorka and mission platforms for Wiesiólka)
- reworked the bridging in the same area
- added Przemiarki onto Lacy Lc
- added Starzyny and Sprowa onto Psary
- added missing Signal "Wl_X" at Warszawa Wlochy

#### <u>**What's to expect for the next version**</u>
- The logic gets a whole rework. The way the data gets called and prepared, the way the canvas renderes will change a bit. It's planned to poll all data together and then draw on them + an additional 2-FPS render so slight animations can be shown like Sz-Signal.
- The hover-popup will have a small change in the future.
- A window to always have the current observing train open with all information, as well as the signal (with animated changing lamps)

## **Version 0.2.3-alpha | HOTFIX**
### Hotfix: fixed signal lamps not showing in Firefox browsers
Update released on 26.04.2026
- value `r` in css-class `.signalLamp` had missing unit px
### <u>Additional Changes:</u>
- fixed track bridging at Warszawa Wlochy


## **Version 0.2.2-alpha**
#### Overview: Map extension and signal image in hover tooltip
Update released on 26.04.2026
### <u>Major Changes</u>
#### Extended the map from Szeligi down to Warszawa Wlochy

### <u>Additional Changes</u>
fix: added missing platforms between Dabrowa Gornicza Zabkowice and Lazy Lc
fix: added missing platform at Opoczo Poludnie
fix: changed station prefix of Pilichowice and Biala Rawska to its originals
- added the main vehicle into train hover tooltip
- added a signal image into the train hover tooltip (without distant signal)
- options menu will now close on focus loss (and does not open on server change via clock click)


## **Version 0.2.1-alpha**
#### Overview: Map extension, performance fix and tooltip hover of trains and signals
Update released on 23.04.2026
### <u>Major Changes</u>
#### Extended the map from Knapowka down to Szeligi
### <u>Additional Changes</u>
- fixed laggy pan/zoom
    - instead of iterating the whole trainList per signal, created a map of signal and it's color on each frame (one time map of trainList per frame)
- added a hover tooltip for trains and signals
    - hovering over a train opens a small popup with the most important informations
    - hovering over a signal gives the signal name and shows if it's an ABS-Signal or a Station-Signal
- options and selected server will now save on change
    - revisiting the application will now select the latest server and enable options from last time
- Signals with a speed lower than 100 km/h will be shown in orange
- Animation of the options menu is now faster and more instant than "fancy" (by request)
- clicking on the clock now also opens the server selection menu (by request)
- removed the ability to use the svg renderer due to the lag-fix



## **Version 0.2.0-alpha**
Update released on 18.04.2026
### <u>Major Changes</u>
- changed main element from svg to canvas
    - that removes 600+ svg elements in the html tree to just a single canvas
    - improves performance and stability
- It might look like its laggier than before. That's because the logic isn't the best right now. On every zoom or pan of the map, everything gets re-drawn. I plan on making that better in future versions. Besides that, the performance and stability is still improved, altho it might not look like this.<br>
**OUTDATED:** If you still want to use the old svg logic, then add a `?showSVG=true` to the url or Copy&Paste `https://thetruevirus.github.io/simrail-tools-html?showSVG=true` into your browser. Everything should look and work the same between both rendering options.
- reworked the whole header & integrated the options menu into the header
    - added a clock into the header which shows local time and selected server time
- added a footer into the visible area
    - shows train count (controlled by players / all trains)
    - shows station count (controlled by players / all stations)
    - shows current mouse coordinates
    - shows option extendedView enabled/disabled
    - on the right shows the current version of the application

### <u>Additional Changes</u>
- shifted all elements and moved them closer together
- continued tracks from Lazy Lb to Knapowka
- added pan boundaries
    - by default, you can't pan Out-of-Bounds
    - enable the option `Allow Extended View` in the options to still extend your pan outside the designated area if you need it
- changed train color
    - train color now shows blue if the train is controlled by a player, otherwise the train stays gray if controlled by a bot
- changed several font sizes of text elements
    - station names
    - ph names
    - different area marker (e.g. Gliwice)
- added track break markers
    - A: Bedzin <-> Dabrowa Gornicza
    - B: Lazy Lb <-> Lazy La
    - C: CMK [ Gora Wlodowska <-> Psary ]