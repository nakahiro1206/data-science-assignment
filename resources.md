
pynnote.audio: https://r-tech14.com/pyannote-whisper-speaker-diarization/
pyannote.audioで簡単話者分離〜whisperを添えて〜: https://qiita.com/sayo0127/items/e22fdc229d2dfd879f75
「笑い声」を分析・検証してみる: https://qiita.com/mk-cover/items/e67c4f13b23edce603ea
Vtuberの声の分類モデルを作ってみた！！: https://qiita.com/kimera0301/items/1203be7a352ffa320613
音声分類の前処理はメルスペクトログラムでOK？　従来のMFCCより高精度な画像分類ベースの論文の紹介: https://qiita.com/koshian2/items/ca99b4a489d164e9cec6
grad-cam. visualization of cnn: https://keras.io/examples/vision/grad_cam/

srt + video: https://www.happyscribe.com/subtitle-tools/add-srt-to-mp4
react: https://stackoverflow.com/questions/76049005/react-player-video-captions-with-srt-file

sample voice: https://samplecontents-dcon.groovy-ec.com/public/shop-nijisanji-niji/import/assets/石神のぞみ 誕生日ボイス2024 サンプル.mp3

Knowledge:\
sampling rate: $f_s$\
Nyquist: $\frac{1}{2}f_s$\
Freq resolution: $\Delta f = \frac{f_s}{N}, \space N = $ length of data\
recommendation: $16kHz \leq f_s, \space 500ms \leq T \leq 2s$

分割するときに話者推定をするのが理想だね 

さんばか分類モデル。
教師となるリソース
Lize: #42FFFF: https://samplecontents-dcon.groovy-ec.com/public/shop-nijisanji-niji/import/assets/リゼ・ヘルエスタ 誕生日ボイス2024 サンプル.mp3
Ange: #C83C35: https://samplecontents-dcon.groovy-ec.com/public/shop-nijisanji-niji/import/assets/アンジュ・カトリーナ 誕生日ボイス2024 サンプル.mp3
Toko: #92F3A4: https://samplecontents-dcon.groovy-ec.com/public/shop-nijisanji-niji/import/assets/戌亥とこ 誕生日ボイス2024 サンプル.mp3

https://qiita.com/Dukapan100knock/items/045612608ceba53b5e40
neutral, happy, angry??