$(".button").on("click", function () {
  // alert(1);

  // 現在時間
  var date = new Date();
  // console.log(date);
  var year = date.getFullYear();
  // console.log(year);
  var hour = date.getHours();
  // console.log(hour);
  var minute = date.getMinutes();
  // console.log(minute);

  // 天気.選択肢してクリックすると、選択肢のバリュー値をrが取得してくる

  $("#tenki_select").change(function () {
    var r = $("option:selected").val();
    // console.log(r);
  });

  // 時間の掲出(「時」「分」を入れた。
  $("h1").html(hour + "時");

  // minuteが０１ー09の場合、'00'+minute slice(-2)を用いて、minute0を二桁表示にする！！
  if (
    minute == 00 ||
    minute == 01 ||
    minute == 02 ||
    minute == 03 ||
    minute == 04 ||
    minute == 05 ||
    minute == 06 ||
    minute == 07 ||
    minute == 08 ||
    minute == 09
  ) {
    var minute0 = ("00" + minute).slice(-2);
    $("h2").html(minute0 + "分");

    // ００ー０９以外のminuteの場合にはelseで、そのままhtml表示する！！
  } else {
    $("h2").html(minute + "分");
  }

  // if条件式 minute

  var hare = +30;
  var ame = hare + 10;

  // ＋＋＋ 下一桁が０の６パターン！！！の条件節！！！表参道！！　＋＋＋
  if (
    minute == 00 ||
    minute == 10 ||
    minute == 20 ||
    minute == 30 ||
    minute == 40 ||
    minute == 50
  ) {
    // 表参道の写真とテキストを表出
    $("h3").text("表参道");
    $("img").attr("src", "./img/omotesando.jpeg");
  }


  // ＋＋＋ 下一桁が1の６パターン！！！の条件節！！！明治神宮！！　＋＋＋
  if (
    minute == 01 ||
    minute == 11 ||
    minute == 21 ||
    minute == 31 ||
    minute == 41 ||
    minute == 51
  ) {
    // 明治神宮前の写真とテキストを表出
    $("h3").text("明治神宮前");
    $("img").attr("src", "./img/meiji_jingumae.jpeg");
  }

  // ＋＋＋ 下一桁が２の６パターン！！！の条件節！！！明治神宮！！　＋＋＋
  if (
    minute == 02 ||
    minute == 12 ||
    minute == 22 ||
    minute == 32 ||
    minute == 42 ||
    minute == 52
  ) {
    // 明治神宮前の写真とテキストを表出
    $("h3").text("明治神宮前");
    $("img").attr("src", "./img/meiji_jingumae.jpeg");
  }

    // ＋＋＋ 下一桁が３の６パターン！！！の条件節！！！明治神宮！！　＋＋＋
    if (
      minute == 03 ||
      minute == 13 ||
      minute == 23 ||
      minute == 33 ||
      minute == 43 ||
      minute == 53
    ) {
      // 明治神宮前の写真とテキストを表出
      $("h3").text("明治神宮前");
      $("img").attr("src", "./img/meiji_jingumae.jpeg");
    }

      // ＋＋＋ 下一桁が４の６パターン！！！の条件節！！！原宿！！　＋＋＋
  if (
    minute == 04 ||
    minute == 14 ||
    minute == 24 ||
    minute == 34 ||
    minute == 44 ||
    minute == 54
  ) {
    // 原宿の写真とテキストを表出
    $("h3").text("原宿");
    $("img").attr("src", "./img/harajuku.jpeg");
  }

    // ＋＋＋ 下一桁が５の６パターン！！！の条件節！！！原宿！！　＋＋＋
    if (
      minute == 05 ||
      minute == 15 ||
      minute == 25 ||
      minute == 35 ||
      minute == 45 ||
      minute == 55
    ) {
      // 原宿の写真とテキストを表出
      $("h3").text("原宿");
      $("img").attr("src", "./img/harajuku.jpeg");
    }

  // ＋＋＋ 下一桁が６の６パターン！！！の条件節！！！原宿！！　＋＋＋
  if (
    minute == 06 ||
    minute == 16 ||
    minute == 26 ||
    minute == 36 ||
    minute == 46 ||
    minute == 56
  ) {
    // 原宿の写真とテキストを表出
    $("h3").text("原宿");
    $("img").attr("src", "./img/harajuku.jpeg");
  }

  // ＋＋＋ 下一桁が７の６パターン！！！の条件節！！！原宿！！　＋＋＋
  if (
    minute == 07 ||
    minute == 17 ||
    minute == 27 ||
    minute == 37 ||
    minute == 47 ||
    minute == 57
  ) {
    // 原宿の写真とテキストを表出
    $("h3").text("原宿");
    $("img").attr("src", "./img/harajuku.jpeg");
  }

  // ＋＋＋ 下一桁が８の６パターン！！！の条件節！！！原宿！！　＋＋＋
  if (
    minute == 08 ||
    minute == 18 ||
    minute == 28 ||
    minute == 38 ||
    minute == 48 ||
    minute == 58
  ) {
    // 原宿の写真とテキストを表出
    $("h3").text("原宿");
    $("img").attr("src", "./img/harajuku.jpeg");
  }

  // ＋＋＋ 下一桁が9の６パターン！！！の条件節！！！原宿！！　＋＋＋
  if (
    minute == 09 ||
    minute == 19 ||
    minute == 29 ||
    minute == 39 ||
    minute == 49 ||
    minute == 59
  ) {
    // 原宿の写真とテキストを表出
    $("h3").text("原宿");
    $("img").attr("src", "./img/harajuku.jpeg");
  }




  // 天気を選ぶとhare とameとをバリュー値からrが取得する
  $("#tenki_select").change(function () {
    var r = $("option:selected").val();
    console.log(r);

    var test1 = hour;
    var test2 = minute + hare;
    var test3 = minute + ame;

    // ＋＋晴れが選ばれた場合＋＋
    if (r == "hare") {
      console.log("haredatta");

      // 「晴れ」で且つ、60よりminute+hareが大きいか、６０の場合は繰上げ！
      if (test2 >= 60) {
        console.log("kuriagaru");

        // 「繰上げ」の場合、「時間」は＋１時間をする！
        var test11 = test1 + 1;
        // 繰上げの「時間」はtest1に代えて、test11で表現する！
        $("h4").html(test11 + "時");

        // 「繰上げ」の場合、「分」は−６０分をする！
        var test21 = test2 - 60;
        // 繰上げの「分」はtest２に代えて、test２1で表現する！

        // ****「分」のtest21を００表示できるようにする！！＊＊＊＊

        if (
          test21 == 00 ||
          test21 == 01 ||
          test21 == 02 ||
          test21 == 03 ||
          test21 == 04 ||
          test21 == 05 ||
          test21 == 06 ||
          test21 == 07 ||
          test21 == 08 ||
          test21 == 09
        ) {
          var test210 = ("00" + test21).slice(-2);
          $("h5").html(test210 + "分");

          // ００ー０９以外のminuteの場合にはelseで、そのままhtml表示する！！
        } else {
          $("h5").html(test21 + "分");
        }
      }

      // 「晴れ」で且つ、６０よりminute+hareが小さいの場合、繰り上がらず！！
      if (test2 < 60) {
        console.log("kuriagarazu");

        // 「繰り上がらず」の場合、「時間」は＋0時間をする！！
        var test12 = test1 + 0;
        // 繰上がらずの「時間」はtest1に代えて、test１２で表現する！
        $("h4").html(test12 + "時");

        // くりあがらずの場合、「分」は−０分をする！！！
        var test22 = test2 - 0;
        // 繰上がらずの「分」はtest２に代えて、test２２で表現する！

        // ****「分」のtest22を００表示できるようにする！！＊＊＊＊

        if (
          test22 == 00 ||
          test22 == 01 ||
          test22 == 02 ||
          test22 == 03 ||
          test22 == 04 ||
          test22 == 05 ||
          test22 == 06 ||
          test22 == 07 ||
          test22 == 08 ||
          test22 == 09
        ) {
          var test220 = ("00" + test22).slice(-2);
          $("h5").html(test220 + "分");

          // ００ー０９以外のminuteの場合にはelseで、そのままhtml表示する！！
        } else {
          $("h5").html(test22 + "分");
        }
        // $("h5").html(test22 + "分");
      }
    }

    // ＋＋雨が選ばれた場合＋＋
    if (r == "ame") {
      console.log("amedatta");

      // 「雨」で且つ、60よりminute+ameが大きいか、６０の場合は繰上げ！
      if (test3 >= 60) {
        console.log(test3);
        console.log("kuriagaru");

        // 「繰上げ」の場合、「時間」は＋１時間をする！
        var test11 = test1 + 1;
        console.log(test11);
        // 繰上げの「時間」はtest1に代えて、test11で表現する！
        $("h4").html(test11 + "時");

        // 「繰上げ」の場合、「分」は−６０分をする！
        var test31 = test3 - 60;
        console.log(test31);
        // 繰上げの「分」はtest3に代えて、test31で表現する！

        // ****「分」のtest31を００表示できるようにする！！＊＊＊＊

        if (
          test31 == 00 ||
          test31 == 01 ||
          test31 == 02 ||
          test31 == 03 ||
          test31 == 04 ||
          test31 == 05 ||
          test31 == 06 ||
          test31 == 07 ||
          test31 == 08 ||
          test31 == 09
        ) {
          var test310 = ("00" + test31).slice(-2);
          $("h5").html(test310 + "分");

          // ００ー０９以外のminuteの場合にはelseで、そのままhtml表示する！！
        } else {
          $("h5").html(test31 + "分");
        }

        // $("h5").html(test31 + "分");
      }

      // 「ame」で且つ、６０よりminute+ameが小さいの場合、繰り上がらず！！
      if (test3 < 60) {
        console.log(test3);
        console.log("kuriagarazu");

        // 「繰り上がらず」の場合、「時間」は＋0時間をする！！
        var test12 = test1 + 0;
        // 繰上がらずの「時間」はtest1に代えて、test１２で表現する！
        $("h4").html(test12 + "時");

        // くりあがらずの場合、「分」は−０分をする！！！
        var test32 = test3 - 0;
        // 繰上がらずの「分」はtest３に代えて、test３２で表現する！

        // ****「分」のtest32を００表示できるようにする！！＊＊＊＊

        if (
          test32 == 00 ||
          test32 == 01 ||
          test32 == 02 ||
          test32 == 03 ||
          test32 == 04 ||
          test32 == 05 ||
          test32 == 06 ||
          test32 == 07 ||
          test32 == 08 ||
          test32 == 09
        ) {
          var test320 = ("00" + test32).slice(-2);
          $("h5").html(test320 + "分");

          // ００ー０９以外のminuteの場合にはelseで、そのままhtml表示する！！
        } else {
          $("h5").html(test32 + "分");
        }
        // $("h5").html(test32 + "分");
      }
    }
    // console.log(r);
  });




  // if (minute == 01) {
  //   console.log(01);
  //   $("h1").text("明治神宮前");
  //   $("img").attr("src", "./img/meiji_jingumae.jpeg");

  //   var test1 = hour;
  //   var test2 = minute + ame;
  //   $("h4").html(test1);
  //   $("h5").html(test2);
  // }

  // if (minute == 02) {
  //   console.log(02);

  //   $("h1").text("明治神宮前");
  //   $("img").attr("src", "./img/meiji_jingumae.jpeg");

  //   var test1 = hour;
  //   var test2 = minute + ame;
  //   $("h4").html(test1);
  //   $("h5").html(test2);
  // }

  // if (minute == 03) {
  //   console.log(03);

  //   $("h1").text("明治神宮前");
  //   $("img").attr("src", "./img/meiji_jingumae.jpeg");

  //   var test1 = hour;
  //   var test2 = minute + ame;
  //   $("h4").html(test1);
  //   $("h5").html(test2);
  // }

  // if (minute == 04) {
  //   console.log(04);

  //   $("h1").text("原宿");
  //   $("img").attr("src", "./img/meiji_jingumae.jpeg");

  //   var test1 = hour;
  //   var test2 = minute + ame;
  //   $("h4").html(test1);
  //   $("h5").html(test2);
  // }

  // if (minute == 05) {
  //   console.log(05);

  //   $("h1").text("原宿");
  //   $("img").attr("src", "./img/harajuku.jpeg");

  //   var test1 = hour;
  //   var test2 = minute + ame;
  //   $("h4").html(test1);
  //   $("h5").html(test2);
  // }

  // if (minute == 06) {
  //   console.log(06);

  //   $("h1").text("原宿");
  //   $("img").attr("src", "./img/harajuku.jpeg");

  //   var test1 = hour;
  //   var test2 = minute + ame;
  //   $("h4").html(test1);
  //   $("h5").html(test2);
  // }

  // if (minute == 07) {
  //   console.log(07);

  //   $("h1").text("原宿");
  //   $("img").attr("src", "./img/harajuku.jpeg");

  //   var test1 = hour;
  //   var test2 = minute + ame;
  //   $("h4").html(test1);
  //   $("h5").html(test2);
  // }

  // if (minute == 08) {
  //   console.log(08);

  //   $("h1").text("原宿");
  //   $("img").attr("src", "./img/harajuku.jpeg");

  //   var test1 = hour;
  //   var test2 = minute + ame;
  //   $("h4").html(test1);
  //   $("h5").html(test2);
  // }

  // if (minute == 09) {
  //   console.log(09);

  //   $("h1").text("原宿");
  //   $("img").attr("src", "./img/harajuku.jpeg");

  //   var test1 = hour;
  //   var test2 = minute + ame;
  //   $("h4").html(test1);
  //   $("h5").html(test2);
  // }
});
