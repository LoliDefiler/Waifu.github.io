(function() {
  var $animate, $container, $message, $paragraph, MESSAGES, animate, initialise, scramble;

  MESSAGES = [];

  MESSAGES.push({
    delay: 2000,
    text: "「WAIFU.TEAM 夫人チーム"
  });

  MESSAGES.push({
    delay: 4000,
    text: "<span>OMAE</span>  - Life 生活 is は"
  });

  MESSAGES.push({
    delay: 6000,
    text: "<span>WA</span> - a game ゲーム"
  });

  MESSAGES.push({
    delay: 9000,
    text: "<span>MOU</span> - being であること ecchi エッチ"
  });

  MESSAGES.push({
    delay: 12000,
    text: "<span>SHINDEIRU</span> - is how 方法は we keep 我々は保ちます"
  });

  MESSAGES.push({
    delay: 15000,
    text: "馬鹿 <span>BAKA</span> - score スコア"
  });

  MESSAGES.push({
    delay: 17000,
    text: "です <span>DESU</span> エッチチーム「 42069 タイムウォーク"
  });

  MESSAGES.push({
    delay: 20000,
    text: "か <span> KA </span> ばか です か"
  });

  $container = $("#container");

  $message = $("#message");

  $animate = $("#animate");

  $paragraph = null;

  scramble = function(element, text, options) {
    var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, j, k, letter, object, order, output, parameters, ref, results, settings, shuffle, target, textCharacters, textLength, wrap;
    // Default properties.
    defaults = {
      probability: 0.2,
      glitches: '-|/\\',
      blank: '',
      duration: text.length * 40,
      ease: 'easeInOutQuad',
      delay: 0.0
    };
    // Convert the element to a jQuery object and build the settings object.
    $element = $(element);
    settings = $.extend(defaults, options);
    // Convenience methods.
    shuffle = function() {
      if (Math.random() < 0.5) {
        return 1;
      } else {
        return -1;
      }
    };
    wrap = function(text, classes) {
      return `<span class="${classes}">${text}</span>`;
    };
    // Glitch values.
    glitchText = settings.glitches;
    glitchCharacters = glitchText.split('');
    glitchLength = glitchCharacters.length;
    glitchProbability = settings.probability;
    glitches = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = glitchCharacters.length; j < len; j++) {
        letter = glitchCharacters[j];
        results.push(wrap(letter, 'glitch'));
      }
      return results;
    })();
    // Ghost values.
    ghostText = $element.text();
    ghostCharacters = ghostText.split('');
    ghostLength = ghostCharacters.length;
    ghosts = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = ghostCharacters.length; j < len; j++) {
        letter = ghostCharacters[j];
        results.push(wrap(letter, 'ghost'));
      }
      return results;
    })();
    // Text values.
    textCharacters = text.split('');
    textLength = textCharacters.length;
    // Order and output arrays.
    order = (function() {
      results = [];
      for (var j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--){ results.push(j); }
      return results;
    }).apply(this).sort(this.shuffle);
    output = [];
    // Build the output array.
    for (i = k = 0, ref = textLength; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
      glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
      glitchCharacter = glitches[glitchIndex];
      ghostCharacter = ghosts[i] || settings.blank;
      addGlitch = Math.random() < glitchProbability;
      character = addGlitch ? glitchCharacter : ghostCharacter;
      output.push(character);
    }
    // Animate the text.
    object = {
      value: 0
    };
    target = {
      value: 1
    };
    parameters = {
      duration: settings.duration,
      ease: settings.ease,
      step: function() {
        var index, l, progress, ref1;
        progress = Math.floor(object.value * (textLength - 1));
        for (i = l = 0, ref1 = progress; 0 <= ref1 ? l <= ref1 : l >= ref1; i = 0 <= ref1 ? ++l : --l) {
          index = order[i];
          output[index] = textCharacters[index];
        }
        return $element.html(output.join(''));
      },
      complete: function() {
        return $element.html(text);
      }
    };
    // Animate the text.
    return $(object).delay(settings.delay).animate(target, parameters);
  };

  animate = function() {
    var data, element, index, j, len, options;
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      data = MESSAGES[index];
      element = $paragraph.get(index);
      element.innerText = '';
      options = {
        delay: data.delay
      };
      scramble(element, data.text, options);
    }
  };

  initialise = function() {
    var index, j, len, text;
    $animate.click(animate);
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      text = MESSAGES[index];
      $message.append("<p>");
    }
    $paragraph = $container.find("p");
    animate();
  };

  initialise();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFFBQUEsRUFBQSxVQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLFVBQUEsRUFBQTs7RUFBQSxRQUFBLEdBQVc7O0VBQ1gsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxDQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxLQUFOO0lBQWEsSUFBQSxFQUFLO0VBQWxCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxLQUFOO0lBQWEsSUFBQSxFQUFLO0VBQWxCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxLQUFOO0lBQWEsSUFBQSxFQUFLO0VBQWxCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxLQUFOO0lBQWEsSUFBQSxFQUFLO0VBQWxCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxLQUFOO0lBQWEsSUFBQSxFQUFLO0VBQWxCLENBQWQ7O0VBRUEsVUFBQSxHQUFhLENBQUEsQ0FBRSxZQUFGOztFQUNiLFFBQUEsR0FBVyxDQUFBLENBQUUsVUFBRjs7RUFDWCxRQUFBLEdBQVcsQ0FBQSxDQUFFLFVBQUY7O0VBQ1gsVUFBQSxHQUFhOztFQUViLFFBQUEsR0FBVyxRQUFBLENBQUMs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QUNYLFFBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUE7SUFBQSxRQUFRLENBQUMsS0FBVCxDQUFlLE9BQWY7SUFDQSxLQUFBLDBEQUFBOztNQUFBLFFBQVEsQ0FBQyxNQUFULENBQWdCLEtBQWhCO0lBQUE7SUFDQSxVQUFBLEdBQWEsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsR0FBaEI7SUFDYixPQUFBLENBQUE7RUFKVzs7RUFPYixVQUFBLENBQUE7QUFuR0EiLCJzb3VyY2VzQ29udGVudCI6WyJNRVNTQUdFUyA9IFtdXG5NRVNTQUdFUy5wdXNoIGRlbGF5OjAsICAgIHRleHQ6XCLjgIwxMznlh7rooYzjgI3mtLvot4PnlKjmiLfmlbBcIlxuTUVTU0FHRVMucHVzaCBkZWxheToxMDAwLCB0ZXh0OlwiPHNwYW4+ODE5PC9zcGFuPiAgLSA3LjI2IOWuieWNkzIuMOeJiOS4iue6v1wiXG5NRVNTQUdFUy5wdXNoIGRlbGF5OjYwMDAsIHRleHQ6XCI8c3Bhbj40MTM2PC9zcGFuPiAtIDkuMTEg5a6J5Y2TMi4x54mI5LiK57q/XCJcbk1FU1NBR0VTLnB1c2ggZGVsYXk6MTEwMDAsIHRleHQ6XCI8c3Bhbj43MTE3PC9zcGFuPiAtIDEyLjYg5a6J5Y2TMi4y54mI5LiK57q/XCJcbk1FU1NBR0VTLnB1c2ggZGVsYXk6MTYwMDAsIHRleHQ6XCI8c3Bhbj4xMjk0Mzwvc3Bhbj4gLSAxMi4zMSAyMDEz5bm05pyA5ZCO5LiA5aSpXCJcbk1FU1NBR0VTLnB1c2ggZGVsYXk6MjEwMDAsIHRleHQ6XCLljobnu48gPHNwYW4+MTA8L3NwYW4+IOasoeeJiOacrOabtOaWsFwiXG5NRVNTQUdFUy5wdXNoIGRlbGF5OjI2MDAwLCB0ZXh0Olwi5YWx5pyJIDxzcGFuPjcwMzQ3PC9zcGFuPiDkvY3nlKjmiLfkvb/nlKjov4fjgIwxMznlh7rooYzjgI1cIlxuTUVTU0FHRVMucHVzaCBkZWxheTozMTAwMCwgdGV4dDpcIue0r+iuoSA8c3Bhbj4xMDczODE4NDwvc3Bhbj4g5qyh5bGP5bmV5rWP6KeI6YePXCJcblxuJGNvbnRhaW5lciA9ICQoXCIjY29udGFpbmVyXCIpXG4kbWVzc2FnZSA9ICQoXCIjbWVzc2FnZVwiKVxuJGFuaW1hdGUgPSAkKFwiI2FuaW1hdGVcIilcbiRwYXJhZ3JhcGggPSBudWxsXG5cbnNjcmFtYmxlID0gKGVsZW1lbnQsIHRleHQsIG9wdGlvbnMpIC0+XG5cbiAgIyBEZWZhdWx0IHByb3BlcnRpZXMuXG4gIGRlZmF1bHRzID1cbiAgICBwcm9iYWJpbGl0eTogMC4yXG4gICAgZ2xpdGNoZXM6ICctfC9cXFxcJ1xuICAgIGJsYW5rOiAnJ1xuICAgIGR1cmF0aW9uOiB0ZXh0Lmxlbmd0aCAqIDQwXG4gICAgZWFzZTogJ2Vhc2VJbk91dFF1YWQnXG4gICAgZGVsYXk6IDAuMFxuXG4gICMgQ29udmVydCB0aGUgZWxlbWVudCB0byBhIGpRdWVyeSBvYmplY3QgYW5kIGJ1aWxkIHRoZSBzZXR0aW5ncyBvYmplY3QuXG4gICRlbGVtZW50ID0gJChlbGVtZW50KVxuICBzZXR0aW5ncyA9ICQuZXh0ZW5kIGRlZmF1bHRzLCBvcHRpb25zXG5cbiAgIyBDb252ZW5pZW5jZSBtZXRob2RzLlxuICBzaHVmZmxlID0gKCkgLT4gaWYgTWF0aC5yYW5kb20oKSA8IDAuNSB0aGVuIDEgZWxzZSAtMVxuICB3cmFwID0gKHRleHQsIGNsYXNzZXMpIC0+IFwiXCJcIjxzcGFuIGNsYXNzPVwiI3tjbGFzc2VzfVwiPiN7dGV4dH08L3NwYW4+XCJcIlwiXG5cbiAgIyBHbGl0Y2ggdmFsdWVzLlxuICBnbGl0Y2hUZXh0ID0gc2V0dGluZ3MuZ2xpdGNoZXNcbiAgZ2xpdGNoQ2hhcmFjdGVycyA9IGdsaXRjaFRleHQuc3BsaXQgJydcbiAgZ2xpdGNoTGVuZ3RoID0gZ2xpdGNoQ2hhcmFjdGVycy5sZW5ndGhcbiAgZ2xpdGNoUHJvYmFiaWxpdHkgPSBzZXR0aW5ncy5wcm9iYWJpbGl0eVxuICBnbGl0Y2hlcyA9ICgod3JhcCBsZXR0ZXIsICdnbGl0Y2gnKSBmb3IgbGV0dGVyIGluIGdsaXRjaENoYXJhY3RlcnMpXG5cbiAgIyBHaG9zdCB2YWx1ZXMuXG4gIGdob3N0VGV4dCA9ICRlbGVtZW50LnRleHQoKVxuICBnaG9zdENoYXJhY3RlcnMgPSBnaG9zdFRleHQuc3BsaXQgJydcbiAgZ2hvc3RMZW5ndGggPSBnaG9zdENoYXJhY3RlcnMubGVuZ3RoXG4gIGdob3N0cyA9ICgod3JhcCBsZXR0ZXIsICdnaG9zdCcpIGZvciBsZXR0ZXIgaW4gZ2hvc3RDaGFyYWN0ZXJzKVxuXG4gICMgVGV4dCB2YWx1ZXMuXG4gIHRleHRDaGFyYWN0ZXJzID0gdGV4dC5zcGxpdCAnJ1xuICB0ZXh0TGVuZ3RoID0gdGV4dENoYXJhY3RlcnMubGVuZ3RoXG5cbiAgIyBPcmRlciBhbmQgb3V0cHV0IGFycmF5cy5cbiAgb3JkZXIgPSBbMC4uLnRleHRMZW5ndGhdLnNvcnQgQHNodWZmbGVcbiAgb3V0cHV0ID0gW11cblxuICAjIEJ1aWxkIHRoZSBvdXRwdXQgYXJyYXkuXG4gIGZvciBpIGluIFswLi4udGV4dExlbmd0aF1cbiAgICBnbGl0Y2hJbmRleCA9IE1hdGguZmxvb3IgTWF0aC5yYW5kb20oKSAqIChnbGl0Y2hMZW5ndGggLSAxKVxuICAgIGdsaXRjaENoYXJhY3RlciA9IGdsaXRjaGVzW2dsaXRjaEluZGV4XVxuICAgIGdob3N0Q2hhcmFjdGVyID0gZ2hvc3RzW2ldIG9yIHNldHRpbmdzLmJsYW5rXG4gICAgYWRkR2xpdGNoID0gTWF0aC5yYW5kb20oKSA8IGdsaXRjaFByb2JhYmlsaXR5XG4gICAgY2hhcmFjdGVyID0gaWYgYWRkR2xpdGNoIHRoZW4gZ2xpdGNoQ2hhcmFjdGVyIGVsc2UgZ2hvc3RDaGFyYWN0ZXJcbiAgICBvdXRwdXQucHVzaCBjaGFyYWN0ZXJcblxuICAjIEFuaW1hdGUgdGhlIHRleHQuXG4gIG9iamVjdCA9IHZhbHVlOjBcbiAgdGFyZ2V0ID0gdmFsdWU6MVxuICBwYXJhbWV0ZXJzID1cbiAgICBkdXJhdGlvbjpzZXR0aW5ncy5kdXJhdGlvblxuICAgIGVhc2U6c2V0dGluZ3MuZWFzZVxuICAgIHN0ZXA6IC0+XG4gICAgICBwcm9ncmVzcyA9IE1hdGguZmxvb3Igb2JqZWN0LnZhbHVlICogKHRleHRMZW5ndGggLSAxKVxuICAgICAgZm9yIGkgaW4gWzAuLnByb2dyZXNzXVxuICAgICAgICBpbmRleCA9IG9yZGVyW2ldXG4gICAgICAgIG91dHB1dFtpbmRleF0gPSB0ZXh0Q2hhcmFjdGVyc1tpbmRleF1cbiAgICAgICRlbGVtZW50Lmh0bWwgb3V0cHV0LmpvaW4gJydcbiAgICBjb21wbGV0ZTogLT5cbiAgICAgICRlbGVtZW50Lmh0bWwgdGV4dFxuXG4gICMgQW5pbWF0ZSB0aGUgdGV4dC5cbiAgJChvYmplY3QpLmRlbGF5KHNldHRpbmdzLmRlbGF5KS5hbmltYXRlIHRhcmdldCwgcGFyYW1ldGVyc1xuXG5cblxuYW5pbWF0ZSA9ICgpIC0+XG4gIGZvciBkYXRhLCBpbmRleCBpbiBNRVNTQUdFU1xuICAgIGVsZW1lbnQgPSAkcGFyYWdyYXBoLmdldCBpbmRleFxuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gJydcbiAgICBvcHRpb25zID0gZGVsYXk6IGRhdGEuZGVsYXlcbiAgICBzY3JhbWJsZSBlbGVtZW50LCBkYXRhLnRleHQsIG9wdGlvbnNcbiAgcmV0dXJuXG5cbmluaXRpYWxpc2UgPSAoKSAtPlxuICAkYW5pbWF0ZS5jbGljayBhbmltYXRlXG4gICRtZXNzYWdlLmFwcGVuZCBcIjxwPlwiIGZvciB0ZXh0LCBpbmRleCBpbiBNRVNTQUdFU1xuICAkcGFyYWdyYXBoID0gJGNvbnRhaW5lci5maW5kIFwicFwiXG4gIGFuaW1hdGUoKVxuICByZXR1cm5cbiBcbmluaXRpYWxpc2UoKVxuIl19
//# sourceURL=coffeescript