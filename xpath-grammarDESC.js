/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var xpathGrammarDESC = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,3],$V1=[1,7],$V2=[1,10],$V3=[1,11],$V4=[1,12],$V5=[1,13],$V6=[1,14],$V7=[1,23],$V8=[1,24],$V9=[1,25],$Va=[1,26],$Vb=[1,27],$Vc=[1,15],$Vd=[1,16],$Ve=[1,17],$Vf=[1,18],$Vg=[1,19],$Vh=[1,20],$Vi=[1,21],$Vj=[1,22],$Vk=[5,23,42,44,45,46,47,48,49,51,52,53,54,55,56],$Vl=[2,7],$Vm=[1,32],$Vn=[1,31],$Vo=[5,6,10,23,42,44,45,46,47,48,49,51,52,53,54,55,56],$Vp=[2,33],$Vq=[1,39],$Vr=[5,6,10,16,23,40,42,44,45,46,47,48,49,51,52,53,54,55,56],$Vs=[5,6,10,23,40,42,44,45,46,47,48,49,51,52,53,54,55,56],$Vt=[2,36],$Vu=[42,44,45,46,47,48,49],$Vv=[2,53],$Vw=[1,73],$Vx=[1,71],$Vy=[1,72],$Vz=[1,74],$VA=[1,75],$VB=[1,76],$VC=[1,77];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Init":3,"Exp":4,"EOF":5,"DIVSIGN":6,"Lexp":7,"Syntfin":8,"Lexp_prima":9,"|":10,"Fin":11,"@":12,"Valor":13,"Opc":14,"Preservada":15,"::":16,"DIR":17,"TEXT":18,"(":19,")":20,"NODE":21,"POSITION":22,"*":23,"ID":24,"NUMBER":25,"STRING":26,"STRING2":27,"DECIMAL":28,"CHILD":29,"DESCENDANT":30,"ANCESTOR":31,"PRECEDING":32,"FOLLOWING":33,"NAMESPACE":34,"SELF":35,"PARENT":36,"LPredicado":37,"Predicado":38,"LPredicado_prima":39,"[":40,"ExprLogica":41,"]":42,"Expr":43,"<=":44,">=":45,"==":46,"!=":47,">":48,"<":49,"Expr_prima":50,"+":51,"-":52,"DIV":53,"MOD":54,"OR":55,"AND":56,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"DIVSIGN",10:"|",12:"@",16:"::",17:"DIR",18:"TEXT",19:"(",20:")",21:"NODE",22:"POSITION",23:"*",24:"ID",25:"NUMBER",26:"STRING",27:"STRING2",28:"DECIMAL",29:"CHILD",30:"DESCENDANT",31:"ANCESTOR",32:"PRECEDING",33:"FOLLOWING",34:"NAMESPACE",35:"SELF",36:"PARENT",40:"[",42:"]",44:"<=",45:">=",46:"==",47:"!=",48:">",49:"<",51:"+",52:"-",53:"DIV",54:"MOD",55:"OR",56:"AND"},
productions_: [0,[3,2],[4,2],[4,1],[7,2],[9,4],[9,3],[9,0],[8,1],[8,3],[8,3],[8,3],[11,2],[11,2],[11,3],[11,3],[11,3],[11,2],[11,2],[13,1],[13,1],[13,1],[13,1],[13,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[14,1],[14,0],[37,2],[39,2],[39,0],[38,3],[41,3],[41,3],[41,3],[41,3],[41,3],[41,3],[41,1],[43,2],[50,3],[50,3],[50,3],[50,3],[50,3],[50,3],[50,3],[50,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},{1:[3]},{5:[1,28]},{7:29,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},o($Vk,[2,3]),o($Vk,$Vl,{9:30,6:$Vm,10:$Vn}),o($Vo,[2,8]),{13:33,15:34,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},o($Vo,$Vp,{14:36,37:37,38:38,16:[1,35],40:$Vq}),o($Vo,$Vp,{37:37,38:38,14:40,40:$Vq}),o($Vo,$Vp,{37:37,38:38,14:41,40:$Vq}),{19:[1,42]},{19:[1,43]},{19:[1,44]},o($Vo,$Vp,{37:37,38:38,14:45,40:$Vq}),o($Vr,[2,24]),o($Vr,[2,25]),o($Vr,[2,26]),o($Vr,[2,27]),o($Vr,[2,28]),o($Vr,[2,29]),o($Vr,[2,30]),o($Vr,[2,31]),o($Vs,[2,19]),o($Vs,[2,20]),o($Vs,[2,21]),o($Vs,[2,22]),o($Vs,[2,23]),{1:[2,1]},o($Vk,[2,2]),o($Vk,[2,4]),{6:[1,46]},{8:47,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},o($Vo,$Vp,{37:37,38:38,14:48,40:$Vq}),o($Vo,$Vp,{37:37,38:38,14:49,40:$Vq}),{11:50,13:9,15:51,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},o($Vo,[2,17]),o($Vo,[2,32]),o($Vo,$Vt,{39:52,38:53,40:$Vq}),{4:56,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,41:54,43:55},o($Vo,[2,12]),o($Vo,[2,13]),{20:[1,57]},{20:[1,58]},{20:[1,59]},o($Vo,[2,18]),{8:60,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},o($Vk,$Vl,{9:61,6:$Vm,10:$Vn}),o($Vo,[2,9]),o($Vo,[2,11]),o($Vo,[2,10]),o($Vo,$Vp,{14:36,37:37,38:38,40:$Vq}),o($Vo,[2,34]),o($Vo,$Vt,{38:53,39:62,40:$Vq}),{42:[1,63]},{42:[2,44],44:[1,64],45:[1,65],46:[1,66],47:[1,67],48:[1,68],49:[1,69]},o($Vu,$Vv,{50:70,23:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC}),o($Vo,[2,14]),o($Vo,[2,15]),o($Vo,[2,16]),o($Vk,$Vl,{9:78,6:$Vm,10:$Vn}),o($Vk,[2,6]),o($Vo,[2,35]),o($Vs,[2,37]),{4:56,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,43:79},{4:56,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,43:80},{4:56,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,43:81},{4:56,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,43:82},{4:56,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,43:83},{4:56,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,43:84},o($Vu,[2,45]),{4:85,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},{4:86,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},{4:87,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},{4:88,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},{4:89,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},{4:90,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},{4:91,6:$V0,7:4,8:5,11:6,12:$V1,13:9,15:8,17:$V2,18:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj},o($Vk,[2,5]),{42:[2,38]},{42:[2,39]},{42:[2,40]},{42:[2,41]},{42:[2,42]},{42:[2,43]},o($Vu,$Vv,{50:92,23:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC}),o($Vu,$Vv,{50:93,23:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC}),o($Vu,$Vv,{50:94,23:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC}),o($Vu,$Vv,{50:95,23:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC}),o($Vu,$Vv,{50:96,23:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC}),o($Vu,$Vv,{50:97,23:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC}),o($Vu,$Vv,{50:98,23:$Vw,51:$Vx,52:$Vy,53:$Vz,54:$VA,55:$VB,56:$VC}),o($Vu,[2,46]),o($Vu,[2,47]),o($Vu,[2,48]),o($Vu,[2,49]),o($Vu,[2,50]),o($Vu,[2,51]),o($Vu,[2,52])],
defaultActions: {28:[2,1],79:[2,38],80:[2,39],81:[2,40],82:[2,41],83:[2,42],84:[2,43]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-sensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 28
break;
case 2:return 25
break;
case 3:return 26
break;
case 4:return 27
break;
case 5:return 6
break;
case 6:return 17
break;
case 7:return 31
break;
case 8:return 33
break;
case 9:return 32
break;
case 10:return 10
break;
case 11:return 12
break;
case 12:return 23
break;
case 13:return 16
break;
case 14:return 52
break;
case 15:return 51
break;
case 16:return 44
break;
case 17:return 45
break;
case 18:return 49
break;
case 19:return 48
break;
case 20:return 47
break;
case 21:return '='
break;
case 22:return 55
break;
case 23:return 56
break;
case 24:return 54
break;
case 25:return 53
break;
case 26:return 19
break;
case 27:return 20 
break;
case 28:return 40
break;
case 29:return 42
break;
case 30:return 29
break;
case 31:return 'ATTR'
break;
case 32:return 30
break;
case 33:return 34
break;
case 34:return 36
break;
case 35:return 35
break;
case 36:return 18
break;
case 37:return 22
break;
case 38:return 21
break;
case 39:return 24;
break;
case 40:return 5
break;
}
},
rules: [/^(?:\s+)/,/^(?:([0-9]+(\.[0-9]+)?))/,/^(?:([0-9]+))/,/^(?:(([\"][^"]*[\"])))/,/^(?:(([\'][^\']*[\'])))/,/^(?:((\/)(\/)?))/,/^(?:((\.)(\.)?))/,/^(?:((ancestor)(-or-self)?))/,/^(?:((following)(-sibling)?))/,/^(?:((preceding)(-sibling)?))/,/^(?:\|)/,/^(?:@)/,/^(?:\*)/,/^(?:::)/,/^(?:-)/,/^(?:\+)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:!=)/,/^(?:=)/,/^(?:or\b)/,/^(?:and\b)/,/^(?:mod\b)/,/^(?:div\b)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:child\b)/,/^(?:attribute\b)/,/^(?:descendant\b)/,/^(?:namespace\b)/,/^(?:parent\b)/,/^(?:self\b)/,/^(?:text\b)/,/^(?:position\b)/,/^(?:node\b)/,/^(?:([a-zA-Z_])[a-zA-Z0-9_ñÑ.]*)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = xpathGrammarDESC;
exports.Parser = xpathGrammarDESC.Parser;
exports.parse = function () { return xpathGrammarDESC.parse.apply(xpathGrammarDESC, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}