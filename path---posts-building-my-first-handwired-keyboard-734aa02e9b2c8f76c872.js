webpackJsonp([0xc38126d252da],{"./node_modules/json-loader/index.js!./.cache/json/posts-building-my-first-handwired-keyboard.json":function(A,e){A.exports={data:{markdownRemark:{html:'<style>\n.gatsby-resp-image-wrapper,\n.gatsby-resp-image-background-image, \n.gatsby-resp-image-image { border-radius: 5px; }\n</style>\n<p>I recently finished my first handwired Atreus keyboard, an ortholinear keyboard with 42 keys. I\'m really happy with how it turned out and I\'m just documenting how it went for me, as well as some reference for my future builds. I\'m proud of out it turned out and excited to do another soon! </p>\n<h3>Final product</h3>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 49.34065934065934%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAVrEZ3oKB//EABwQAAIBBQEAAAAAAAAAAAAAAAIDAAEEERMxQf/aAAgBAQABBQJlwe02FFuwPlIXf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/Aaf/xAAaEAACAgMAAAAAAAAAAAAAAAAAAhEhARBR/9oACAEBAAY/Asw1ScLH3//EABkQAQEBAQEBAAAAAAAAAAAAAAERAEEhMf/aAAgBAQABPyEV/gZUa1PjrQm3uQbcXE88O5N+7//aAAwDAQACAAMAAAAQ0O//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EKlj/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARUf/aAAgBAgEBPxBHLW//xAAbEAEBAQEAAwEAAAAAAAAAAAABEQAhMUFxkf/aAAgBAQABPxBdIEU5zOgwpsdlZnQyTVX1iICQU8ZdLM6nzA6P3f/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="final"\n        title=""\n        src="/static/df40b4c89a33be5d79a1789fd9be981b-55338.jpg"\n        srcset="/static/df40b4c89a33be5d79a1789fd9be981b-a21e6.jpg 163w,\n/static/df40b4c89a33be5d79a1789fd9be981b-4ac53.jpg 325w,\n/static/df40b4c89a33be5d79a1789fd9be981b-55338.jpg 650w,\n/static/df40b4c89a33be5d79a1789fd9be981b-80f1d.jpg 975w,\n/static/df40b4c89a33be5d79a1789fd9be981b-7fc90.jpg 1300w,\n/static/df40b4c89a33be5d79a1789fd9be981b-96c4f.jpg 1950w,\n/static/df40b4c89a33be5d79a1789fd9be981b-62e42.jpg 2730w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>This is a cross-section of both top and bottom of the keyboard. The bottom is clear acrylic, to always be able to show of my handiwork! </p>\n<p>I researched the hell out of this thing before starting, because I practically knew nothing about the circuitry of how a keyboard matrix worked. The biggest hurdle would be knowing the software well enough to enable the hardware. I was lucky in that the <a href="https://atreus.technomancy.us/assembly-hand-wired.pdf">Atreus hand wire guide</a> is pretty comprehensive, as well as relying on great resources like this <a href="https://imgur.com/a/qcgdF">"Modern handwiring guide"</a>. I already knew a fair amount about pro micros from previous builds (I\'ve built 4 other keyboards but with PCBs) so that gave me lots of information about its limitations, and where stuff goes; as well as with experience with <a href="https://github.com/qmk/qmk_firmware">QMK</a>. There are plenty of awesome and active people on the QMK Gitter if you get stuck with the firmware. I also had plenty of help from the great people in the <a href="https://discord.gg/tjjT8J">UTMK discord</a> (which welcomes anyone really) regarding the hardware aspect of my build. </p>\n<h3>Build in review</h3>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAESctObdBqf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAERITA//aAAgBAQABBQK6ByFHlqbadGrq8//EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAgBAwEBPwGsf//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAgEBPwGJr//EABsQAAIBBQAAAAAAAAAAAAAAAAABMREhIjJR/9oACAEBAAY/AqCwVzhJJsz/xAAbEAADAQADAQAAAAAAAAAAAAAAAREhMVFhcf/aAAgBAQABPyG1Sn90o1gohLEEjKnTEtZw8Rcv/9oADAMBAAIAAwAAABBr/wD/xAAXEQADAQAAAAAAAAAAAAAAAAAAARFR/9oACAEDAQE/EEhcH//EABYRAQEBAAAAAAAAAAAAAAAAAAEAYf/aAAgBAgEBPxBZaX//xAAeEAEAAgIBBQAAAAAAAAAAAAABABEhMWFBkdHh8P/aAAgBAQABPxAzYd0B90gBluXeNeYFfFBp5zEUNath2ZXiYUeqK1bOGp//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1"\n        title=""\n        src="/static/b2b4b59c5be9274ef2da82cde8ae4f5f-55338.jpg"\n        srcset="/static/b2b4b59c5be9274ef2da82cde8ae4f5f-a21e6.jpg 163w,\n/static/b2b4b59c5be9274ef2da82cde8ae4f5f-4ac53.jpg 325w,\n/static/b2b4b59c5be9274ef2da82cde8ae4f5f-55338.jpg 650w,\n/static/b2b4b59c5be9274ef2da82cde8ae4f5f-80f1d.jpg 975w,\n/static/b2b4b59c5be9274ef2da82cde8ae4f5f-7fc90.jpg 1300w,\n/static/b2b4b59c5be9274ef2da82cde8ae4f5f-96c4f.jpg 1950w,\n/static/b2b4b59c5be9274ef2da82cde8ae4f5f-3b893.jpg 2784w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>The case is laser cut from ¼" plywood. A friend sold it to me after finding that it wouldn\'t work for his Atreus PCB. Here I\'m putting in the switches; the black ones are Gateron Clears, the whites are Kalih Pro Purples.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAFAtj52+FJ//8QAGRABAQEBAQEAAAAAAAAAAAAAAgEAEgMR/9oACAEBAAEFAqucmsfUqL7SuToXZ//EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oACAEDAQE/AUf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAgEBPwFX/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAECIRARMSL/2gAIAQEABj8Co6X3Hq2bUYpH/8QAGxAAAwEBAAMAAAAAAAAAAAAAAAERQSExUWH/2gAIAQEAAT8heq015K7YstpofkXV9ItmQvkPZ//aAAwDAQACAAMAAAAQW/8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAABFB/9oACAEDAQE/ENQ//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPxCMWf/EAB8QAQABBAIDAQAAAAAAAAAAAAEhABExUUFhcYHR8P/aAAgBAQABPxAKJcSWLdUiTBuOTMfGdVaLEDM+qITpzYP7zVywscBrVApYApe4r//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="2"\n        title=""\n        src="/static/83d18f005cf9ab2da4ab15ace66611cf-55338.jpg"\n        srcset="/static/83d18f005cf9ab2da4ab15ace66611cf-a21e6.jpg 163w,\n/static/83d18f005cf9ab2da4ab15ace66611cf-4ac53.jpg 325w,\n/static/83d18f005cf9ab2da4ab15ace66611cf-55338.jpg 650w,\n/static/83d18f005cf9ab2da4ab15ace66611cf-80f1d.jpg 975w,\n/static/83d18f005cf9ab2da4ab15ace66611cf-7fc90.jpg 1300w,\n/static/83d18f005cf9ab2da4ab15ace66611cf-96c4f.jpg 1950w,\n/static/83d18f005cf9ab2da4ab15ace66611cf-3b893.jpg 2784w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Hot glued the switches in. If I could go back, I would have added the keycaps to the switches so that I could rotate them to better rotate/align them with one another before gluing them down. Lesson learned.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAED/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAYWVMWhP/8QAGxAAAwACAwAAAAAAAAAAAAAAAAECAxIRExT/2gAIAQEAAQUC9FbZMtcd9EyikjVH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECEBEhYf/aAAgBAQAGPwLhFm2NYFX/xAAZEAADAQEBAAAAAAAAAAAAAAAAARExIVH/2gAIAQEAAT8haXj14SDZV3BBs0SDXasK6j//2gAMAwEAAgADAAAAEEgf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAwEBPxBLCn//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QbhD/xAAbEAEBAAMBAQEAAAAAAAAAAAABEQAhMUGRcf/aAAgBAQABPxAZNLhXKncINHUpVPPub21uvzGYM6hH73ABBwO/MW0bn//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="3"\n        title=""\n        src="/static/0c930e34829e7d07e06fca2cfdc856d5-55338.jpg"\n        srcset="/static/0c930e34829e7d07e06fca2cfdc856d5-a21e6.jpg 163w,\n/static/0c930e34829e7d07e06fca2cfdc856d5-4ac53.jpg 325w,\n/static/0c930e34829e7d07e06fca2cfdc856d5-55338.jpg 650w,\n/static/0c930e34829e7d07e06fca2cfdc856d5-80f1d.jpg 975w,\n/static/0c930e34829e7d07e06fca2cfdc856d5-7fc90.jpg 1300w,\n/static/0c930e34829e7d07e06fca2cfdc856d5-96c4f.jpg 1950w,\n/static/0c930e34829e7d07e06fca2cfdc856d5-3b893.jpg 2784w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Diodes all added. Many guides recommend using loops so I did. This technique works <em>really</em> well. In some other builds, the downward facing leg of the diode is simply bent and soldered to the adjacent diode; I instead connected them to a row wire which ends up looking much more polished in my opinion.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAUomd7CgH//EABoQAAIDAQEAAAAAAAAAAAAAAAECABEhAyL/2gAIAQEAAQUCfpTBtuHxMK2Z/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAEBEi/9oACAEBAAY/AuJrKprpRNU1/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAERIUFRcf/aAAgBAQABPyFEeeCG7r4XuhFxODm0ljweEH//2gAMAwEAAgADAAAAEMsv/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERQVH/2gAIAQMBAT8Qiwi4f//EABgRAAMBAQAAAAAAAAAAAAAAAAABEUFR/9oACAECAQE/EK9K+n//xAAfEAEAAQQBBQAAAAAAAAAAAAABEQAxQVFxIWGBkdH/2gAIAQEAAT8QQoE8LOeV3qocRlUz0z39VMAgIMR8qIlbAmrukSSHDzSYtRlvX//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="4"\n        title=""\n        src="/static/32b32b3b4b39d386f6de4c7b0ccb82ac-55338.jpg"\n        srcset="/static/32b32b3b4b39d386f6de4c7b0ccb82ac-a21e6.jpg 163w,\n/static/32b32b3b4b39d386f6de4c7b0ccb82ac-4ac53.jpg 325w,\n/static/32b32b3b4b39d386f6de4c7b0ccb82ac-55338.jpg 650w,\n/static/32b32b3b4b39d386f6de4c7b0ccb82ac-80f1d.jpg 975w,\n/static/32b32b3b4b39d386f6de4c7b0ccb82ac-7fc90.jpg 1300w,\n/static/32b32b3b4b39d386f6de4c7b0ccb82ac-96c4f.jpg 1950w,\n/static/32b32b3b4b39d386f6de4c7b0ccb82ac-3b893.jpg 2784w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Close up of diodes. If you look closely, the diode on the white switch is reversed... didn\'t find this error until after everything else was all put together.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 177.77777777777777%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAkABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEBQH/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQB/9oADAMBAAIQAxAAAAGZ2dZ5Bthg3IGWywoKJsagJ6NUA8//xAAhEAACAQMDBQAAAAAAAAAAAAABAgMAEhMEEDERISIjMv/aAAgBAQABBQJ180LdedkWtMiYsiilYESm2RhaYj7HQO0v1Gvccf/EABoRAAICAwAAAAAAAAAAAAAAAAEQAAIDETH/2gAIAQMBAT8BW5bGSev/xAAWEQEBAQAAAAAAAAAAAAAAAAABEAL/2gAIAQIBAT8BpsC//8QAHRAAAgIBBQAAAAAAAAAAAAAAAAEQETESIkFRof/aAAgBAQAGPwJmSy36N9I3ZMjoZUXqajmP/8QAHxABAAMAAgIDAQAAAAAAAAAAAQARITFBUWFxgaGx/9oACAEBAAE/IaazbOHYJlqpdPEbb5Rbu3dafkt9x9sNnpeSI9HELB3scp3sw3BxR1GBT6e5eCK4CKl8H9ht1tBhn//aAAwDAQACAAMAAAAQ1xZBj8//xAAZEQACAwEAAAAAAAAAAAAAAAAAARBBURH/2gAIAQMBAT8Qs6tMDY0Lcf/EABkRAQEAAwEAAAAAAAAAAAAAAAEAEBFBIf/aAAgBAgEBPxDlpk83GBLhj//EAB8QAQADAAIBBQAAAAAAAAAAAAEAESExQZFRcYGhwf/aAAgBAQABPxBq4WDOmcxAsKGmpagqlaIj0MWoXlveaRQBjYg2QAiNI1nX5KlfLIa1dfMxSlBVXOCpHmEVg7ABp4VgCLZ2JB9emZz4IE+5eaF7t8OIXaAo3x3UBRqlqz//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="5"\n        title=""\n        src="/static/92810f88675d2f7927d6887f90681ee2-55338.jpg"\n        srcset="/static/92810f88675d2f7927d6887f90681ee2-a21e6.jpg 163w,\n/static/92810f88675d2f7927d6887f90681ee2-4ac53.jpg 325w,\n/static/92810f88675d2f7927d6887f90681ee2-55338.jpg 650w,\n/static/92810f88675d2f7927d6887f90681ee2-80f1d.jpg 975w,\n/static/92810f88675d2f7927d6887f90681ee2-7fc90.jpg 1300w,\n/static/92810f88675d2f7927d6887f90681ee2-5ea17.jpg 1566w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Single row wire just before soldering.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABWybGd2AJ/8QAGxABAQABBQAAAAAAAAAAAAAAAgEDAAQTITL/2gAIAQEAAQUC51K86NDSi6yVVa2/j//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAQEBAQEAAAAAAAAAAAAAAAEAESGB/9oACAEBAAY/AnAGMbcJu3t//8QAGxABAAICAwAAAAAAAAAAAAAAAQAhETFBUYH/2gAIAQEAAT8hcnA2huaYEzHfIliBvqDXz5LuP//aAAwDAQACAAMAAAAQ/B//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxBX/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QR//EABwQAQACAgMBAAAAAAAAAAAAAAEAESFBMVFhcf/aAAgBAQABPxAvoxlKYPY1ghQnc5cj0/Xfdx0BRo0WVEK0liAWm/GNE//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="6"\n        title=""\n        src="/static/91e8aa1f4286813c9a801a794c7d163b-55338.jpg"\n        srcset="/static/91e8aa1f4286813c9a801a794c7d163b-a21e6.jpg 163w,\n/static/91e8aa1f4286813c9a801a794c7d163b-4ac53.jpg 325w,\n/static/91e8aa1f4286813c9a801a794c7d163b-55338.jpg 650w,\n/static/91e8aa1f4286813c9a801a794c7d163b-80f1d.jpg 975w,\n/static/91e8aa1f4286813c9a801a794c7d163b-7fc90.jpg 1300w,\n/static/91e8aa1f4286813c9a801a794c7d163b-96c4f.jpg 1950w,\n/static/91e8aa1f4286813c9a801a794c7d163b-3b893.jpg 2784w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Row wires connected. Use solid core wire and things will be <em>much</em> easier for you. I used stranded wire from an ethernet cable, and had to redo them a couple of times since I cut through too many strands while trying to remove the insulation. I also developed my own technique with a v-notch wire stripper after a while, to be able to remove the insulation quickly without the inner strands. Just use solid core.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 177.77777777777777%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAkABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAIDAQQFBv/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABpQjnfcSJxdjUqH0bBOJcS3i5/8QAHRAAAwACAgMAAAAAAAAAAAAAAQIDABIRMiIxM//aAAgBAQABBQKpOy3YYnkrnnFXYp1DgYlBsnWnsZPpX6SkrZShkf/EABYRAAMAAAAAAAAAAAAAAAAAABAgQf/aAAgBAwEBPwFIP//EABcRAAMBAAAAAAAAAAAAAAAAAAABEEH/2gAIAQIBAT8BqNn/xAAcEAACAgIDAAAAAAAAAAAAAAAAARARMWECEiH/2gAIAQEABj8CdPEWx7ZU4h6cIo9OvHB//8QAHxABAAMAAgEFAAAAAAAAAAAAAQARITFRYRBBcaGx/9oACAEBAAE/Ibohkyckj8ywckvYdFyMBdemYJEy+RfbzFH7M1BDt/WYczzXphb7UzhkGAYvZ//aAAwDAQACAAMAAAAQiDpNDD//xAAaEQACAgMAAAAAAAAAAAAAAAAAARARITFR/9oACAEDAQE/EBrJdD2dR//EABkRAAIDAQAAAAAAAAAAAAAAAAABETFBYf/aAAgBAgEBPxDoqIkoh4Ej/8QAIBABAQACAgIDAQEAAAAAAAAAAREAITFBUbFhcaHR4f/aAAgBAQABPxAxmiEyu3R9mJzkfBYzvAEArx95IEFonRoPwzqoT0drHxrCNKy+8q12oVrBXYtAgj/uOLJV950Lonkhn7ik0hgAOmHOIab595SlAtHsv8yEry9/OK+g8q7X5z//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="7"\n        title=""\n        src="/static/bcb026f3373c08055f66173426bdb5d1-55338.jpg"\n        srcset="/static/bcb026f3373c08055f66173426bdb5d1-a21e6.jpg 163w,\n/static/bcb026f3373c08055f66173426bdb5d1-4ac53.jpg 325w,\n/static/bcb026f3373c08055f66173426bdb5d1-55338.jpg 650w,\n/static/bcb026f3373c08055f66173426bdb5d1-80f1d.jpg 975w,\n/static/bcb026f3373c08055f66173426bdb5d1-7fc90.jpg 1300w,\n/static/bcb026f3373c08055f66173426bdb5d1-5ea17.jpg 1566w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Next came the column wires. These were easier since they\'re shorter.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwACBP/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAASHT532zwv/EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMREzL/2gAIAQEAAQUCsGQCVpqux6ADK/H/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwFH/8QAGxAAAgEFAAAAAAAAAAAAAAAAAAECITFhgdH/2gAIAQEABj8ChY4VbHhGhH//xAAbEAACAgMBAAAAAAAAAAAAAAAAARExIUFhof/aAAgBAQABPyHDTbasclKxdyPcguNEcHncaHmP/9oADAMBAAIAAwAAABCE/wD/xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8QdHT/xAAXEQADAQAAAAAAAAAAAAAAAAAAATEh/9oACAECAQE/EFNIP//EAB0QAQADAAEFAAAAAAAAAAAAAAEAESFBMVFhkbH/2gAIAQEAAT8QuNRl0VnSFRcJbT1NFALt8HHELrbRdFmkYhEorKsFhCjs+E//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="8"\n        title=""\n        src="/static/c4f01b4a5461fe09861d5c0627ac7521-55338.jpg"\n        srcset="/static/c4f01b4a5461fe09861d5c0627ac7521-a21e6.jpg 163w,\n/static/c4f01b4a5461fe09861d5c0627ac7521-4ac53.jpg 325w,\n/static/c4f01b4a5461fe09861d5c0627ac7521-55338.jpg 650w,\n/static/c4f01b4a5461fe09861d5c0627ac7521-80f1d.jpg 975w,\n/static/c4f01b4a5461fe09861d5c0627ac7521-7fc90.jpg 1300w,\n/static/c4f01b4a5461fe09861d5c0627ac7521-96c4f.jpg 1950w,\n/static/c4f01b4a5461fe09861d5c0627ac7521-3b893.jpg 2784w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Close up of column wires. You can\'t tell from this picture, but the top-rightmost switch had a short. The wires were a little too taught, so when I soldered the column wire the insulation between the two melted together and the wire cores touched. Just had to pull them away from each other and that was it. I ended up having 3 shorts total, all because of the same thing.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDAf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAASeLnTEgf//EABsQAAEEAwAAAAAAAAAAAAAAAAIAAQMREBNB/9oACAEBAAEFAjnPYU5oZ3rtNj//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIhEBEy/9oACAEBAAY/AnqVHTLY8//EABsQAAICAwEAAAAAAAAAAAAAAAABEUEhMWFx/9oACAEBAAE/IUkuy0ITCJ6b7b9KakshDWT/2gAMAwEAAgADAAAAEGzv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EGx//8QAFhEBAQEAAAAAAAAAAAAAAAAAABEh/9oACAECAQE/EK1//8QAGxABAQEBAQADAAAAAAAAAAAAAREAMSFBgdH/2gAIAQEAAT8QEuElH5klbVWvgw17PriBIU/Ep3JILd5jab9O/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="9"\n        title=""\n        src="/static/feed0f5628f207f0f4b397b22ee3faa2-55338.jpg"\n        srcset="/static/feed0f5628f207f0f4b397b22ee3faa2-a21e6.jpg 163w,\n/static/feed0f5628f207f0f4b397b22ee3faa2-4ac53.jpg 325w,\n/static/feed0f5628f207f0f4b397b22ee3faa2-55338.jpg 650w,\n/static/feed0f5628f207f0f4b397b22ee3faa2-80f1d.jpg 975w,\n/static/feed0f5628f207f0f4b397b22ee3faa2-7fc90.jpg 1300w,\n/static/feed0f5628f207f0f4b397b22ee3faa2-96c4f.jpg 1950w,\n/static/feed0f5628f207f0f4b397b22ee3faa2-3b893.jpg 2784w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Final product! I had tried to "bend" the green row wires to make it look nicer and let me organize them together better but... didn\'t achieve the intended effect. Still like the way it turned out, especially for a first time build! Here you can see the speaker I\'ve added too. This keyboard can make noise! Here\'s a video of it playing the Imperial March on startup: <a href="https://youtu.be/XQPiW4ZtcOY">https://youtu.be/XQPiW4ZtcOY</a></p>\n<p>I ended up setting it to play the Zelda Treasure chime.</p>\n<p>TLDR of things I learned while attempting to add this audio feature: </p>\n<ul>\n<li>Pin C6 or B5 has to be unused and can\'t be shared with any keys</li>\n<li>Setting B5 in the firmware never seemed to work for me, so I freed up C6 instead, soldered the speaker to that, and everything was good </li>\n<li>Enabling audio ends up taking a fair chunk of memory; you may need to disable other QMK features or you might brick the controller (which I believe I actually did on another keyboard)</li>\n<li>The novelty factor was worth it. My kid loves playing with it in music mode, and my coworkers have fun with it too.</li>\n</ul>\n<p>My version of the layout can be found on my <a href="https://github.com/filoxo/keyboard-layouts">Keyboard Layouts repo</a>. </p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECA//EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABSic60JD/xAAZEAACAwEAAAAAAAAAAAAAAAABAgMEEgD/2gAIAQEAAQUCltussllgsdk5ZRrI7C9//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAEhMQIREiL/2gAIAQEABj8CaVC5jZ6cmUCKP//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExUXH/2gAIAQEAAT8hScq8ZfrC/kctrRJI75FdF1yCax//2gAMAwEAAgADAAAAEE8//8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Qp//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQIBAT8QU27f/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFRYUGBof/aAAgBAQABPxBVOmButkbTylN8q+xoe7lPFERbF9t8z3hStQGjfWJ//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="10"\n        title=""\n        src="/static/b0cb4d40cf9c8c31b2038f112e0bb856-55338.jpg"\n        srcset="/static/b0cb4d40cf9c8c31b2038f112e0bb856-a21e6.jpg 163w,\n/static/b0cb4d40cf9c8c31b2038f112e0bb856-4ac53.jpg 325w,\n/static/b0cb4d40cf9c8c31b2038f112e0bb856-55338.jpg 650w,\n/static/b0cb4d40cf9c8c31b2038f112e0bb856-80f1d.jpg 975w,\n/static/b0cb4d40cf9c8c31b2038f112e0bb856-7fc90.jpg 1300w,\n/static/b0cb4d40cf9c8c31b2038f112e0bb856-96c4f.jpg 1950w,\n/static/b0cb4d40cf9c8c31b2038f112e0bb856-3b893.jpg 2784w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Top view of the keyboard with keycaps. The next steps will probably disassemble to to stain/treat the wood before using heavily, as well as add a strip of LEDs for some underglow.</p>',frontmatter:{date:"February 12, 2018",path:"/posts/building-my-first-handwired-keyboard",tags:["keyboards"],title:"Building my first handwired keyboard"}}},pathContext:{prev:!1,next:{excerpt:"I've yet to reach the point in my career where I'm attached to a single framework. I've used Angular 2+ heavily for the last year at work, have recently rewritten an Angular 1 app in React, and have chosen to use Vue for my personal projects for now…",html:"<p>I've yet to reach the point in my career where I'm attached to a single framework. I've used Angular 2+ heavily for the last year at work, have recently rewritten an Angular 1 app in React, and have chosen to use Vue for my personal projects for now. These are some of my thoughts on what I found to be some good and bad parts of Angular.</p>\n<h3>The Good</h3>\n<ul>\n<li>As a full framework, you'll experience less decision fatigue and won't have lib fragmentation (eg. team A uses Axios, team B uses Superagent).</li>\n<li>‎TypeScript makes JavaScript feel familiar to backend/full-stack devs.</li>\n<li>RxJS/‎Observables are so awesome! This reactive data flow also helps you keep your components UI-focused.</li>\n<li>‎The Angular CLI is fantastic! Its so good, in fact, that it hardly makes sense to use anything else.</li>\n<li>‎Predictable and periodic framework updates set a great rhythm. Of course, this is personal preference. I've read some other peoples' struggles with having gotten too far behind... but the cadence with which Angular releases feels just right.</li>\n<li>The animations API is good when it works. React's TransitionGroup is the equivalent, but most React beginners don't know about it or how to find it to solve animations with components mounting/unmounting. The Angular animations work well for this same usage, but there have been quite a few bugs with it between versions. I had to revert to CSS animations. Hopefully they've been fixed and that has stablized.</li>\n</ul>\n<h3>The Bad</h3>\n<ul>\n<li>With TypeScript it is easy to bloat your code &#x26; forget to push business logic down to the server.</li>\n<li>‎Modules+routes are the only option for creating code split boundaries. So far, there hasn't been a community-built solution for code splitting elsewhere.</li>\n<li>Using Services to manage state is hard. It almost doesn't make sense to have Services and I'm about 90% sure this syntax was carried over for those who have a hard time migrating from Angular 1. Because of this there is little to no standardization on how services should work or be used. We ended up using Services to only hold Observables...</li>\n<li>‎Good luck trying to get any native js modules to work. Maybe that lib doesn't have types. Or requires a browser global. Or can't be statically analyzed by the TS compiler... The list goes on.</li>\n<li>Testing is just BAD. Testing requires 30+ lines of boilerplate, and requires a lot of ceremony. I have not written a test that actually works with Angular that hasn't felt extremely frail. From configuring the TestBed to updating selectors, testing is a huge burden compared to how easy it is with React and Vue.</li>\n<li>Angular errors are convoluted and imprecise. Welcome to debugging hell. 👿</li>\n<li>Having a wrapping host element is bad for styling. This is mainly because we have a legacy style framework. One such problem was with a widget that uses immediate child selectors, and the host element prevents this from working correctly. If you could get total buy-in to encapsulated styles, you shouldn't face this issue.</li>\n<li>RxJS takes effort and time to master, and the docs could use a lot of work. We've had to learn about Observables,BehaviorSujects, Subscriptions, and a plethora of operators with difficult names (switchMap, flatMap, zip, idk how many more).</li>\n<li>‎There's no equivalent of React's stateless functional component and that is sad. Sometimes it would be much easier if a component didn't need state and accept only Inputs (props for you React users).</li>\n<li>The <code>&#x3C;router-outlet></code> prevents you from being able flow data down to Components. This is a HUGE issue and I hate it with a passion.</li>\n<li>Development Tooling with Angular is severely lacking. Augury was an attempt at dev tools for Angular but is a total failure. Unable to view your Angular component tree or intereact with your data stores makes for a poor DX.</li>\n</ul>\n<h2>Conclusion</h2>\n<p>I've written approximately twice as many \"bads\" as \"goods\" for this article, but that doesn't mean I hate Angular. It is definitely a viable option, and still has the backing of Google despite some misteps with branding and architecture. I just hope these issues are something you might analyze before using, or can use your voice and vote to help improve Angular.</p>",
id:"/Users/cfiloteo/dev/blog/src/pages/2017-11-30-the-good-and-bad-of-angular/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2017-11-30T00:00:00.000Z",path:"/posts/the-good-and-bad-parts-of-angular",tags:["angular"],title:"The 👍 and 👎 parts of Angular"}}}}}});
//# sourceMappingURL=path---posts-building-my-first-handwired-keyboard-734aa02e9b2c8f76c872.js.map