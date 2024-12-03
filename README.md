# データサイエンス超入門 発展課題

## ディレクトリについての説明

### cnn

Google Colaboratory 上で GPU に接続して実行した。

学習データの入力には`mel-spectrogram` で処理して得られた` .npy`ファイルを使用している。

### cnn-evaluation

`cnn` で学習して得られたモデルを利用して評価を行った。

### mel-spectrogram

音声からメルスペクトログラムに変換する作業、およびそうして得られたデータを`.npy`ファイルに出力することを行なった。

### misc

本レポートでは使用しなかったコードを置いている。

### pyannote

pyannote.audio と whisper を用いて対象の動画の話者分離とそれぞれのセグメントに対する書き起こしを行なった。
これも Google Colaboratory の GPU を用いて実行した。

### vtt-on-video

生成した VTT ファイルを使用して、実際の動画と一緒に字幕を再生するシステム。
