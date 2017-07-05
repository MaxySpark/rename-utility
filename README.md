# rename-utility
Rename Multiple File Using NodeJS

### Uses
#### Install `rename-utility` Globaly
```
$ npm install -g rename-utility
```
#### Open Terminal and Go To The Desired Directory Then Run The Below Command
```
$ remall [Option]
```

### Options
#### `--search, -s` for `Search Word` (String Better Wrap in `""`)
#### `--rename, --rp` for `Replace Word` (String Better Wrap in `""`)
#### `--help, -h` for `Show Help`
![Option](https://raw.githubusercontent.com/MaxySpark/rename-utility/img/img/remall-2.png "Option")

#### Find and Replace of A Speceial Part or Word of The Filename and Replace With a New Word
```
$ remall -s <search word> --rp <replace word>
```
![Search and Replace File Name](https://raw.githubusercontent.com/MaxySpark/rename-utility/img/img/remall-1.png "Search and Replace File Name")


#### Append New Word(s) at The Front or First of All File Names
```
$ remall --af <append text>
```
![Append Front](https://raw.githubusercontent.com/MaxySpark/rename-utility/img/img/remall-3.png "Append Front")

#### Append New Word(s) at The Last of All File Names
```
$ remall --al <append text>
```
![Append Last](https://raw.githubusercontent.com/MaxySpark/rename-utility/img/img/remall-4.png "Append Last")

#### Append New Word(s) at The Front and Last of All File Names
```
$ remall --af <append text> --al <append text>
```
![Append Both](https://raw.githubusercontent.com/MaxySpark/rename-utility/img/img/remall-5.png "Append both")