(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [36],
  {
    "+cRy": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("owkM"),
        i = n("MOv1"),
        o = n("CcFB");
      t.ImplementationRequest = o.ImplementationRequest;
      var s = n("8ahE");
      t.TypeDefinitionRequest = s.TypeDefinitionRequest;
      var a = n("VqZt");
      (t.WorkspaceFoldersRequest = a.WorkspaceFoldersRequest),
        (t.DidChangeWorkspaceFoldersNotification =
          a.DidChangeWorkspaceFoldersNotification);
      var c = n("sKb1");
      t.ConfigurationRequest = c.ConfigurationRequest;
      var u = n("zZpG");
      (t.DocumentColorRequest = u.DocumentColorRequest),
        (t.ColorPresentationRequest = u.ColorPresentationRequest);
      var d = n("3JnO");
      (t.FoldingRangeRequest = d.FoldingRangeRequest),
        (function (e) {
          e.is = function (e) {
            var t = e;
            return (
              r.string(t.language) || r.string(t.scheme) || r.string(t.pattern)
            );
          };
        })(t.DocumentFilter || (t.DocumentFilter = {})),
        (function (e) {
          e.type = new i.RequestType("client/registerCapability");
        })(t.RegistrationRequest || (t.RegistrationRequest = {})),
        (function (e) {
          e.type = new i.RequestType("client/unregisterCapability");
        })(t.UnregistrationRequest || (t.UnregistrationRequest = {})),
        (function (e) {
          (e.Create = "create"), (e.Rename = "rename"), (e.Delete = "delete");
        })(t.ResourceOperationKind || (t.ResourceOperationKind = {})),
        (function (e) {
          (e.Abort = "abort"),
            (e.Transactional = "transactional"),
            (e.TextOnlyTransactional = "textOnlyTransactional"),
            (e.Undo = "undo");
        })(t.FailureHandlingKind || (t.FailureHandlingKind = {})),
        (function (e) {
          (e.None = 0), (e.Full = 1), (e.Incremental = 2);
        })(t.TextDocumentSyncKind || (t.TextDocumentSyncKind = {})),
        (function (e) {
          e.type = new i.RequestType("initialize");
        })(t.InitializeRequest || (t.InitializeRequest = {})),
        (function (e) {
          e.unknownProtocolVersion = 1;
        })(t.InitializeError || (t.InitializeError = {})),
        (function (e) {
          e.type = new i.NotificationType("initialized");
        })(t.InitializedNotification || (t.InitializedNotification = {})),
        (function (e) {
          e.type = new i.RequestType0("shutdown");
        })(t.ShutdownRequest || (t.ShutdownRequest = {})),
        (function (e) {
          e.type = new i.NotificationType0("exit");
        })(t.ExitNotification || (t.ExitNotification = {})),
        (function (e) {
          e.type = new i.NotificationType("workspace/didChangeConfiguration");
        })(
          t.DidChangeConfigurationNotification ||
            (t.DidChangeConfigurationNotification = {})
        ),
        (function (e) {
          (e.Error = 1), (e.Warning = 2), (e.Info = 3), (e.Log = 4);
        })(t.MessageType || (t.MessageType = {})),
        (function (e) {
          e.type = new i.NotificationType("window/showMessage");
        })(t.ShowMessageNotification || (t.ShowMessageNotification = {})),
        (function (e) {
          e.type = new i.RequestType("window/showMessageRequest");
        })(t.ShowMessageRequest || (t.ShowMessageRequest = {})),
        (function (e) {
          e.type = new i.NotificationType("window/logMessage");
        })(t.LogMessageNotification || (t.LogMessageNotification = {})),
        (function (e) {
          e.type = new i.NotificationType("telemetry/event");
        })(t.TelemetryEventNotification || (t.TelemetryEventNotification = {})),
        (function (e) {
          e.type = new i.NotificationType("textDocument/didOpen");
        })(
          t.DidOpenTextDocumentNotification ||
            (t.DidOpenTextDocumentNotification = {})
        ),
        (function (e) {
          e.type = new i.NotificationType("textDocument/didChange");
        })(
          t.DidChangeTextDocumentNotification ||
            (t.DidChangeTextDocumentNotification = {})
        ),
        (function (e) {
          e.type = new i.NotificationType("textDocument/didClose");
        })(
          t.DidCloseTextDocumentNotification ||
            (t.DidCloseTextDocumentNotification = {})
        ),
        (function (e) {
          e.type = new i.NotificationType("textDocument/didSave");
        })(
          t.DidSaveTextDocumentNotification ||
            (t.DidSaveTextDocumentNotification = {})
        ),
        (function (e) {
          e.type = new i.NotificationType("textDocument/willSave");
        })(
          t.WillSaveTextDocumentNotification ||
            (t.WillSaveTextDocumentNotification = {})
        ),
        (function (e) {
          e.type = new i.RequestType("textDocument/willSaveWaitUntil");
        })(
          t.WillSaveTextDocumentWaitUntilRequest ||
            (t.WillSaveTextDocumentWaitUntilRequest = {})
        ),
        (function (e) {
          e.type = new i.NotificationType("workspace/didChangeWatchedFiles");
        })(
          t.DidChangeWatchedFilesNotification ||
            (t.DidChangeWatchedFilesNotification = {})
        ),
        (function (e) {
          (e.Created = 1), (e.Changed = 2), (e.Deleted = 3);
        })(t.FileChangeType || (t.FileChangeType = {})),
        (function (e) {
          (e.Create = 1), (e.Change = 2), (e.Delete = 4);
        })(t.WatchKind || (t.WatchKind = {})),
        (function (e) {
          e.type = new i.NotificationType("textDocument/publishDiagnostics");
        })(
          t.PublishDiagnosticsNotification ||
            (t.PublishDiagnosticsNotification = {})
        ),
        (function (e) {
          (e.Invoked = 1),
            (e.TriggerCharacter = 2),
            (e.TriggerForIncompleteCompletions = 3);
        })(t.CompletionTriggerKind || (t.CompletionTriggerKind = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/completion");
        })(t.CompletionRequest || (t.CompletionRequest = {})),
        (function (e) {
          e.type = new i.RequestType("completionItem/resolve");
        })(t.CompletionResolveRequest || (t.CompletionResolveRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/hover");
        })(t.HoverRequest || (t.HoverRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/signatureHelp");
        })(t.SignatureHelpRequest || (t.SignatureHelpRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/definition");
        })(t.DefinitionRequest || (t.DefinitionRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/references");
        })(t.ReferencesRequest || (t.ReferencesRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/documentHighlight");
        })(t.DocumentHighlightRequest || (t.DocumentHighlightRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/documentSymbol");
        })(t.DocumentSymbolRequest || (t.DocumentSymbolRequest = {})),
        (function (e) {
          e.type = new i.RequestType("workspace/symbol");
        })(t.WorkspaceSymbolRequest || (t.WorkspaceSymbolRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/codeAction");
        })(t.CodeActionRequest || (t.CodeActionRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/codeLens");
        })(t.CodeLensRequest || (t.CodeLensRequest = {})),
        (function (e) {
          e.type = new i.RequestType("codeLens/resolve");
        })(t.CodeLensResolveRequest || (t.CodeLensResolveRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/formatting");
        })(t.DocumentFormattingRequest || (t.DocumentFormattingRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/rangeFormatting");
        })(
          t.DocumentRangeFormattingRequest ||
            (t.DocumentRangeFormattingRequest = {})
        ),
        (function (e) {
          e.type = new i.RequestType("textDocument/onTypeFormatting");
        })(
          t.DocumentOnTypeFormattingRequest ||
            (t.DocumentOnTypeFormattingRequest = {})
        ),
        (function (e) {
          e.type = new i.RequestType("textDocument/rename");
        })(t.RenameRequest || (t.RenameRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/prepareRename");
        })(t.PrepareRenameRequest || (t.PrepareRenameRequest = {})),
        (function (e) {
          e.type = new i.RequestType("textDocument/documentLink");
        })(t.DocumentLinkRequest || (t.DocumentLinkRequest = {})),
        (function (e) {
          e.type = new i.RequestType("documentLink/resolve");
        })(t.DocumentLinkResolveRequest || (t.DocumentLinkResolveRequest = {})),
        (function (e) {
          e.type = new i.RequestType("workspace/executeCommand");
        })(t.ExecuteCommandRequest || (t.ExecuteCommandRequest = {})),
        (function (e) {
          e.type = new i.RequestType("workspace/applyEdit");
        })(t.ApplyWorkspaceEditRequest || (t.ApplyWorkspaceEditRequest = {}));
    },
    "1Y8E": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("kjvz"),
        i = n("U+XB"),
        o = n("LkUo"),
        s = n("zxs+"),
        a = n("in9m"),
        c = n("Gz0x");
      !(function (e) {
        function t(e, t) {
          void 0 === t && (t = {});
          var n = new r.MonacoToProtocolConverter(),
            c = new r.ProtocolToMonacoConverter();
          return {
            commands: new i.MonacoCommands(e),
            languages: new o.MonacoLanguages(c, n),
            workspace: new s.MonacoWorkspace(c, n, t.rootUri),
            window: new a.ConsoleWindow(),
          };
        }
        (e.create = t),
          (e.install = function (e, n) {
            void 0 === n && (n = {});
            var r = t(e, n);
            return c.Services.install(r), r;
          }),
          (e.get = function () {
            return c.Services.get();
          });
      })(t.MonacoServices || (t.MonacoServices = {}));
    },
    "2vv7": function (e, t) {
      e.exports = function (e, t) {
        if ("string" !== typeof e) throw new TypeError("Expected a string");
        for (
          var n,
            r = String(e),
            i = "",
            o = !!t && !!t.extended,
            s = !!t && !!t.globstar,
            a = !1,
            c = t && "string" === typeof t.flags ? t.flags : "",
            u = 0,
            d = r.length;
          u < d;
          u++
        )
          switch ((n = r[u])) {
            case "\\":
            case "/":
            case "$":
            case "^":
            case "+":
            case ".":
            case "(":
            case ")":
            case "=":
            case "!":
            case "|":
              i += "\\" + n;
              break;
            case "?":
              if (o) {
                i += ".";
                break;
              }
            case "[":
            case "]":
              if (o) {
                i += n;
                break;
              }
            case "{":
              if (o) {
                (a = !0), (i += "(");
                break;
              }
            case "}":
              if (o) {
                (a = !1), (i += ")");
                break;
              }
            case ",":
              if (a) {
                i += "|";
                break;
              }
              i += "\\" + n;
              break;
            case "*":
              for (var l = r[u - 1], p = 1; "*" === r[u + 1]; ) p++, u++;
              var f = r[u + 1];
              if (s)
                p > 1 &&
                ("/" === l || void 0 === l) &&
                ("/" === f || void 0 === f)
                  ? ((i += "(?:[^/]*(?:/|$))*"), u++)
                  : (i += "[^/]*");
              else i += ".*";
              break;
            default:
              i += n;
          }
        return (c && ~c.indexOf("g")) || (i = "^" + i + "$"), new RegExp(i, c);
      };
    },
    "3JnO": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("MOv1");
      !(function (e) {
        (e.Comment = "comment"), (e.Imports = "imports"), (e.Region = "region");
      })(t.FoldingRangeKind || (t.FoldingRangeKind = {})),
        (function (e) {
          e.type = new r.RequestType("textDocument/foldingRange");
        })(t.FoldingRangeRequest || (t.FoldingRangeRequest = {}));
    },
    "7Z1E": function (e, t, n) {
      "use strict";
      var r, i, o, s, a, c, u, d, l, p, f, m, g, h, v, y, C, D;
      n.r(t),
        n.d(t, "Position", function () {
          return r;
        }),
        n.d(t, "Range", function () {
          return i;
        }),
        n.d(t, "Location", function () {
          return o;
        }),
        n.d(t, "Color", function () {
          return s;
        }),
        n.d(t, "ColorInformation", function () {
          return a;
        }),
        n.d(t, "ColorPresentation", function () {
          return c;
        }),
        n.d(t, "FoldingRangeKind", function () {
          return u;
        }),
        n.d(t, "FoldingRange", function () {
          return d;
        }),
        n.d(t, "DiagnosticRelatedInformation", function () {
          return l;
        }),
        n.d(t, "DiagnosticSeverity", function () {
          return p;
        }),
        n.d(t, "Diagnostic", function () {
          return f;
        }),
        n.d(t, "Command", function () {
          return m;
        }),
        n.d(t, "TextEdit", function () {
          return g;
        }),
        n.d(t, "TextDocumentEdit", function () {
          return h;
        }),
        n.d(t, "CreateFile", function () {
          return v;
        }),
        n.d(t, "RenameFile", function () {
          return y;
        }),
        n.d(t, "DeleteFile", function () {
          return C;
        }),
        n.d(t, "WorkspaceEdit", function () {
          return D;
        }),
        n.d(t, "WorkspaceChange", function () {
          return j;
        }),
        n.d(t, "TextDocumentIdentifier", function () {
          return w;
        }),
        n.d(t, "VersionedTextDocumentIdentifier", function () {
          return x;
        }),
        n.d(t, "TextDocumentItem", function () {
          return b;
        }),
        n.d(t, "MarkupKind", function () {
          return _;
        }),
        n.d(t, "MarkupContent", function () {
          return R;
        }),
        n.d(t, "CompletionItemKind", function () {
          return T;
        }),
        n.d(t, "InsertTextFormat", function () {
          return P;
        }),
        n.d(t, "CompletionItem", function () {
          return S;
        }),
        n.d(t, "CompletionList", function () {
          return k;
        }),
        n.d(t, "MarkedString", function () {
          return E;
        }),
        n.d(t, "Hover", function () {
          return O;
        }),
        n.d(t, "ParameterInformation", function () {
          return M;
        }),
        n.d(t, "SignatureInformation", function () {
          return F;
        }),
        n.d(t, "DocumentHighlightKind", function () {
          return q;
        }),
        n.d(t, "DocumentHighlight", function () {
          return I;
        }),
        n.d(t, "SymbolKind", function () {
          return N;
        }),
        n.d(t, "SymbolInformation", function () {
          return L;
        }),
        n.d(t, "DocumentSymbol", function () {
          return $;
        }),
        n.d(t, "CodeActionKind", function () {
          return A;
        }),
        n.d(t, "CodeActionContext", function () {
          return W;
        }),
        n.d(t, "CodeAction", function () {
          return H;
        }),
        n.d(t, "CodeLens", function () {
          return U;
        }),
        n.d(t, "FormattingOptions", function () {
          return z;
        }),
        n.d(t, "DocumentLink", function () {
          return J;
        }),
        n.d(t, "EOL", function () {
          return G;
        }),
        n.d(t, "TextDocument", function () {
          return V;
        }),
        n.d(t, "TextDocumentSaveReason", function () {
          return B;
        }),
        (function (e) {
          (e.create = function (e, t) {
            return { line: e, character: t };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.objectLiteral(t) && Z.number(t.line) && Z.number(t.character)
              );
            });
        })(r || (r = {})),
        (function (e) {
          (e.create = function (e, t, n, i) {
            if (Z.number(e) && Z.number(t) && Z.number(n) && Z.number(i))
              return { start: r.create(e, t), end: r.create(n, i) };
            if (r.is(e) && r.is(t)) return { start: e, end: t };
            throw new Error(
              "Range#create called with invalid arguments[" +
                e +
                ", " +
                t +
                ", " +
                n +
                ", " +
                i +
                "]"
            );
          }),
            (e.is = function (e) {
              var t = e;
              return Z.objectLiteral(t) && r.is(t.start) && r.is(t.end);
            });
        })(i || (i = {})),
        (function (e) {
          (e.create = function (e, t) {
            return { uri: e, range: t };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.defined(t) &&
                i.is(t.range) &&
                (Z.string(t.uri) || Z.undefined(t.uri))
              );
            });
        })(o || (o = {})),
        (function (e) {
          (e.create = function (e, t, n, r) {
            return { red: e, green: t, blue: n, alpha: r };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.number(t.red) &&
                Z.number(t.green) &&
                Z.number(t.blue) &&
                Z.number(t.alpha)
              );
            });
        })(s || (s = {})),
        (function (e) {
          (e.create = function (e, t) {
            return { range: e, color: t };
          }),
            (e.is = function (e) {
              var t = e;
              return i.is(t.range) && s.is(t.color);
            });
        })(a || (a = {})),
        (function (e) {
          (e.create = function (e, t, n) {
            return { label: e, textEdit: t, additionalTextEdits: n };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.string(t.label) &&
                (Z.undefined(t.textEdit) || g.is(t)) &&
                (Z.undefined(t.additionalTextEdits) ||
                  Z.typedArray(t.additionalTextEdits, g.is))
              );
            });
        })(c || (c = {})),
        (function (e) {
          (e.Comment = "comment"),
            (e.Imports = "imports"),
            (e.Region = "region");
        })(u || (u = {})),
        (function (e) {
          (e.create = function (e, t, n, r, i) {
            var o = { startLine: e, endLine: t };
            return (
              Z.defined(n) && (o.startCharacter = n),
              Z.defined(r) && (o.endCharacter = r),
              Z.defined(i) && (o.kind = i),
              o
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.number(t.startLine) &&
                Z.number(t.startLine) &&
                (Z.undefined(t.startCharacter) || Z.number(t.startCharacter)) &&
                (Z.undefined(t.endCharacter) || Z.number(t.endCharacter)) &&
                (Z.undefined(t.kind) || Z.string(t.kind))
              );
            });
        })(d || (d = {})),
        (function (e) {
          (e.create = function (e, t) {
            return { location: e, message: t };
          }),
            (e.is = function (e) {
              var t = e;
              return Z.defined(t) && o.is(t.location) && Z.string(t.message);
            });
        })(l || (l = {})),
        (function (e) {
          (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
        })(p || (p = {})),
        (function (e) {
          (e.create = function (e, t, n, r, i, o) {
            var s = { range: e, message: t };
            return (
              Z.defined(n) && (s.severity = n),
              Z.defined(r) && (s.code = r),
              Z.defined(i) && (s.source = i),
              Z.defined(o) && (s.relatedInformation = o),
              s
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.defined(t) &&
                i.is(t.range) &&
                Z.string(t.message) &&
                (Z.number(t.severity) || Z.undefined(t.severity)) &&
                (Z.number(t.code) || Z.string(t.code) || Z.undefined(t.code)) &&
                (Z.string(t.source) || Z.undefined(t.source)) &&
                (Z.undefined(t.relatedInformation) ||
                  Z.typedArray(t.relatedInformation, l.is))
              );
            });
        })(f || (f = {})),
        (function (e) {
          (e.create = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var i = { title: e, command: t };
            return Z.defined(n) && n.length > 0 && (i.arguments = n), i;
          }),
            (e.is = function (e) {
              var t = e;
              return Z.defined(t) && Z.string(t.title) && Z.string(t.command);
            });
        })(m || (m = {})),
        (function (e) {
          (e.replace = function (e, t) {
            return { range: e, newText: t };
          }),
            (e.insert = function (e, t) {
              return { range: { start: e, end: e }, newText: t };
            }),
            (e.del = function (e) {
              return { range: e, newText: "" };
            }),
            (e.is = function (e) {
              var t = e;
              return Z.objectLiteral(t) && Z.string(t.newText) && i.is(t.range);
            });
        })(g || (g = {})),
        (function (e) {
          (e.create = function (e, t) {
            return { textDocument: e, edits: t };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.defined(t) && x.is(t.textDocument) && Array.isArray(t.edits)
              );
            });
        })(h || (h = {})),
        (function (e) {
          (e.create = function (e, t) {
            var n = { kind: "create", uri: e };
            return (
              void 0 === t ||
                (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
                (n.options = t),
              n
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                t &&
                "create" === t.kind &&
                Z.string(t.uri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.overwrite ||
                    Z.boolean(t.options.overwrite)) &&
                    (void 0 === t.options.ignoreIfExists ||
                      Z.boolean(t.options.ignoreIfExists))))
              );
            });
        })(v || (v = {})),
        (function (e) {
          (e.create = function (e, t, n) {
            var r = { kind: "rename", oldUri: e, newUri: t };
            return (
              void 0 === n ||
                (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
                (r.options = n),
              r
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                t &&
                "rename" === t.kind &&
                Z.string(t.oldUri) &&
                Z.string(t.newUri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.overwrite ||
                    Z.boolean(t.options.overwrite)) &&
                    (void 0 === t.options.ignoreIfExists ||
                      Z.boolean(t.options.ignoreIfExists))))
              );
            });
        })(y || (y = {})),
        (function (e) {
          (e.create = function (e, t) {
            var n = { kind: "delete", uri: e };
            return (
              void 0 === t ||
                (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
                (n.options = t),
              n
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                t &&
                "delete" === t.kind &&
                Z.string(t.uri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.recursive ||
                    Z.boolean(t.options.recursive)) &&
                    (void 0 === t.options.ignoreIfNotExists ||
                      Z.boolean(t.options.ignoreIfNotExists))))
              );
            });
        })(C || (C = {})),
        (function (e) {
          e.is = function (e) {
            var t = e;
            return (
              t &&
              (void 0 !== t.changes || void 0 !== t.documentChanges) &&
              (void 0 === t.documentChanges ||
                t.documentChanges.every(function (e) {
                  return Z.string(e.kind)
                    ? v.is(e) || y.is(e) || C.is(e)
                    : h.is(e);
                }))
            );
          };
        })(D || (D = {}));
      var w,
        x,
        b,
        _,
        R,
        T,
        P,
        S,
        k,
        E,
        O,
        M,
        F,
        q,
        I,
        N,
        L,
        K = (function () {
          function e(e) {
            this.edits = e;
          }
          return (
            (e.prototype.insert = function (e, t) {
              this.edits.push(g.insert(e, t));
            }),
            (e.prototype.replace = function (e, t) {
              this.edits.push(g.replace(e, t));
            }),
            (e.prototype.delete = function (e) {
              this.edits.push(g.del(e));
            }),
            (e.prototype.add = function (e) {
              this.edits.push(e);
            }),
            (e.prototype.all = function () {
              return this.edits;
            }),
            (e.prototype.clear = function () {
              this.edits.splice(0, this.edits.length);
            }),
            e
          );
        })(),
        j = (function () {
          function e(e) {
            var t = this;
            (this._textEditChanges = Object.create(null)),
              e &&
                ((this._workspaceEdit = e),
                e.documentChanges
                  ? e.documentChanges.forEach(function (e) {
                      if (h.is(e)) {
                        var n = new K(e.edits);
                        t._textEditChanges[e.textDocument.uri] = n;
                      }
                    })
                  : e.changes &&
                    Object.keys(e.changes).forEach(function (n) {
                      var r = new K(e.changes[n]);
                      t._textEditChanges[n] = r;
                    }));
          }
          return (
            Object.defineProperty(e.prototype, "edit", {
              get: function () {
                return this._workspaceEdit;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.getTextEditChange = function (e) {
              if (x.is(e)) {
                if (
                  (this._workspaceEdit ||
                    (this._workspaceEdit = { documentChanges: [] }),
                  !this._workspaceEdit.documentChanges)
                )
                  throw new Error(
                    "Workspace edit is not configured for document changes."
                  );
                var t = e;
                if (!(r = this._textEditChanges[t.uri])) {
                  var n = { textDocument: t, edits: (i = []) };
                  this._workspaceEdit.documentChanges.push(n),
                    (r = new K(i)),
                    (this._textEditChanges[t.uri] = r);
                }
                return r;
              }
              if (
                (this._workspaceEdit ||
                  (this._workspaceEdit = { changes: Object.create(null) }),
                !this._workspaceEdit.changes)
              )
                throw new Error(
                  "Workspace edit is not configured for normal text edit changes."
                );
              var r;
              if (!(r = this._textEditChanges[e])) {
                var i = [];
                (this._workspaceEdit.changes[e] = i),
                  (r = new K(i)),
                  (this._textEditChanges[e] = r);
              }
              return r;
            }),
            (e.prototype.createFile = function (e, t) {
              this.checkDocumentChanges(),
                this._workspaceEdit.documentChanges.push(v.create(e, t));
            }),
            (e.prototype.renameFile = function (e, t, n) {
              this.checkDocumentChanges(),
                this._workspaceEdit.documentChanges.push(y.create(e, t, n));
            }),
            (e.prototype.deleteFile = function (e, t) {
              this.checkDocumentChanges(),
                this._workspaceEdit.documentChanges.push(C.create(e, t));
            }),
            (e.prototype.checkDocumentChanges = function () {
              if (!this._workspaceEdit || !this._workspaceEdit.documentChanges)
                throw new Error(
                  "Workspace edit is not configured for document changes."
                );
            }),
            e
          );
        })();
      !(function (e) {
        (e.create = function (e) {
          return { uri: e };
        }),
          (e.is = function (e) {
            var t = e;
            return Z.defined(t) && Z.string(t.uri);
          });
      })(w || (w = {})),
        (function (e) {
          (e.create = function (e, t) {
            return { uri: e, version: t };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.defined(t) &&
                Z.string(t.uri) &&
                (null === t.version || Z.number(t.version))
              );
            });
        })(x || (x = {})),
        (function (e) {
          (e.create = function (e, t, n, r) {
            return { uri: e, languageId: t, version: n, text: r };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.defined(t) &&
                Z.string(t.uri) &&
                Z.string(t.languageId) &&
                Z.number(t.version) &&
                Z.string(t.text)
              );
            });
        })(b || (b = {})),
        (function (e) {
          (e.PlainText = "plaintext"), (e.Markdown = "markdown");
        })(_ || (_ = {})),
        (function (e) {
          e.is = function (t) {
            var n = t;
            return n === e.PlainText || n === e.Markdown;
          };
        })(_ || (_ = {})),
        (function (e) {
          e.is = function (e) {
            var t = e;
            return Z.objectLiteral(e) && _.is(t.kind) && Z.string(t.value);
          };
        })(R || (R = {})),
        (function (e) {
          (e.Text = 1),
            (e.Method = 2),
            (e.Function = 3),
            (e.Constructor = 4),
            (e.Field = 5),
            (e.Variable = 6),
            (e.Class = 7),
            (e.Interface = 8),
            (e.Module = 9),
            (e.Property = 10),
            (e.Unit = 11),
            (e.Value = 12),
            (e.Enum = 13),
            (e.Keyword = 14),
            (e.Snippet = 15),
            (e.Color = 16),
            (e.File = 17),
            (e.Reference = 18),
            (e.Folder = 19),
            (e.EnumMember = 20),
            (e.Constant = 21),
            (e.Struct = 22),
            (e.Event = 23),
            (e.Operator = 24),
            (e.TypeParameter = 25);
        })(T || (T = {})),
        (function (e) {
          (e.PlainText = 1), (e.Snippet = 2);
        })(P || (P = {})),
        (function (e) {
          e.create = function (e) {
            return { label: e };
          };
        })(S || (S = {})),
        (function (e) {
          e.create = function (e, t) {
            return { items: e || [], isIncomplete: !!t };
          };
        })(k || (k = {})),
        (function (e) {
          (e.fromPlainText = function (e) {
            return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.string(t) ||
                (Z.objectLiteral(t) &&
                  Z.string(t.language) &&
                  Z.string(t.value))
              );
            });
        })(E || (E = {})),
        (function (e) {
          e.is = function (e) {
            var t = e;
            return (
              Z.objectLiteral(t) &&
              (R.is(t.contents) ||
                E.is(t.contents) ||
                Z.typedArray(t.contents, E.is)) &&
              (void 0 === e.range || i.is(e.range))
            );
          };
        })(O || (O = {})),
        (function (e) {
          e.create = function (e, t) {
            return t ? { label: e, documentation: t } : { label: e };
          };
        })(M || (M = {})),
        (function (e) {
          e.create = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var i = { label: e };
            return (
              Z.defined(t) && (i.documentation = t),
              Z.defined(n) ? (i.parameters = n) : (i.parameters = []),
              i
            );
          };
        })(F || (F = {})),
        (function (e) {
          (e.Text = 1), (e.Read = 2), (e.Write = 3);
        })(q || (q = {})),
        (function (e) {
          e.create = function (e, t) {
            var n = { range: e };
            return Z.number(t) && (n.kind = t), n;
          };
        })(I || (I = {})),
        (function (e) {
          (e.File = 1),
            (e.Module = 2),
            (e.Namespace = 3),
            (e.Package = 4),
            (e.Class = 5),
            (e.Method = 6),
            (e.Property = 7),
            (e.Field = 8),
            (e.Constructor = 9),
            (e.Enum = 10),
            (e.Interface = 11),
            (e.Function = 12),
            (e.Variable = 13),
            (e.Constant = 14),
            (e.String = 15),
            (e.Number = 16),
            (e.Boolean = 17),
            (e.Array = 18),
            (e.Object = 19),
            (e.Key = 20),
            (e.Null = 21),
            (e.EnumMember = 22),
            (e.Struct = 23),
            (e.Event = 24),
            (e.Operator = 25),
            (e.TypeParameter = 26);
        })(N || (N = {})),
        (function (e) {
          e.create = function (e, t, n, r, i) {
            var o = { name: e, kind: t, location: { uri: r, range: n } };
            return i && (o.containerName = i), o;
          };
        })(L || (L = {}));
      var A,
        W,
        H,
        U,
        z,
        $ = function () {};
      !(function (e) {
        (e.create = function (e, t, n, r, i, o) {
          var s = { name: e, detail: t, kind: n, range: r, selectionRange: i };
          return void 0 !== o && (s.children = o), s;
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              Z.string(t.name) &&
              Z.number(t.kind) &&
              i.is(t.range) &&
              i.is(t.selectionRange) &&
              (void 0 === t.detail || Z.string(t.detail)) &&
              (void 0 === t.deprecated || Z.boolean(t.deprecated)) &&
              (void 0 === t.children || Array.isArray(t.children))
            );
          });
      })($ || ($ = {})),
        (function (e) {
          (e.QuickFix = "quickfix"),
            (e.Refactor = "refactor"),
            (e.RefactorExtract = "refactor.extract"),
            (e.RefactorInline = "refactor.inline"),
            (e.RefactorRewrite = "refactor.rewrite"),
            (e.Source = "source"),
            (e.SourceOrganizeImports = "source.organizeImports");
        })(A || (A = {})),
        (function (e) {
          (e.create = function (e, t) {
            var n = { diagnostics: e };
            return void 0 !== t && null !== t && (n.only = t), n;
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.defined(t) &&
                Z.typedArray(t.diagnostics, f.is) &&
                (void 0 === t.only || Z.typedArray(t.only, Z.string))
              );
            });
        })(W || (W = {})),
        (function (e) {
          (e.create = function (e, t, n) {
            var r = { title: e };
            return (
              m.is(t) ? (r.command = t) : (r.edit = t),
              void 0 !== n && (r.kind = n),
              r
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                t &&
                Z.string(t.title) &&
                (void 0 === t.diagnostics ||
                  Z.typedArray(t.diagnostics, f.is)) &&
                (void 0 === t.kind || Z.string(t.kind)) &&
                (void 0 !== t.edit || void 0 !== t.command) &&
                (void 0 === t.command || m.is(t.command)) &&
                (void 0 === t.edit || D.is(t.edit))
              );
            });
        })(H || (H = {})),
        (function (e) {
          (e.create = function (e, t) {
            var n = { range: e };
            return Z.defined(t) && (n.data = t), n;
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.defined(t) &&
                i.is(t.range) &&
                (Z.undefined(t.command) || m.is(t.command))
              );
            });
        })(U || (U = {})),
        (function (e) {
          (e.create = function (e, t) {
            return { tabSize: e, insertSpaces: t };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Z.defined(t) && Z.number(t.tabSize) && Z.boolean(t.insertSpaces)
              );
            });
        })(z || (z = {}));
      var J = function () {};
      !(function (e) {
        (e.create = function (e, t, n) {
          return { range: e, target: t, data: n };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Z.defined(t) &&
              i.is(t.range) &&
              (Z.undefined(t.target) || Z.string(t.target))
            );
          });
      })(J || (J = {}));
      var V,
        B,
        G = ["\n", "\r\n", "\r"];
      !(function (e) {
        function t(e, n) {
          if (e.length <= 1) return e;
          var r = (e.length / 2) | 0,
            i = e.slice(0, r),
            o = e.slice(r);
          t(i, n), t(o, n);
          for (var s = 0, a = 0, c = 0; s < i.length && a < o.length; ) {
            var u = n(i[s], o[a]);
            e[c++] = u <= 0 ? i[s++] : o[a++];
          }
          for (; s < i.length; ) e[c++] = i[s++];
          for (; a < o.length; ) e[c++] = o[a++];
          return e;
        }
        (e.create = function (e, t, n, r) {
          return new Q(e, t, n, r);
        }),
          (e.is = function (e) {
            var t = e;
            return !!(
              Z.defined(t) &&
              Z.string(t.uri) &&
              (Z.undefined(t.languageId) || Z.string(t.languageId)) &&
              Z.number(t.lineCount) &&
              Z.func(t.getText) &&
              Z.func(t.positionAt) &&
              Z.func(t.offsetAt)
            );
          }),
          (e.applyEdits = function (e, n) {
            for (
              var r = e.getText(),
                i = t(n, function (e, t) {
                  var n = e.range.start.line - t.range.start.line;
                  return 0 === n
                    ? e.range.start.character - t.range.start.character
                    : n;
                }),
                o = r.length,
                s = i.length - 1;
              s >= 0;
              s--
            ) {
              var a = i[s],
                c = e.offsetAt(a.range.start),
                u = e.offsetAt(a.range.end);
              if (!(u <= o)) throw new Error("Ovelapping edit");
              (r = r.substring(0, c) + a.newText + r.substring(u, r.length)),
                (o = c);
            }
            return r;
          });
      })(V || (V = {})),
        (function (e) {
          (e.Manual = 1), (e.AfterDelay = 2), (e.FocusOut = 3);
        })(B || (B = {}));
      var Z,
        Q = (function () {
          function e(e, t, n, r) {
            (this._uri = e),
              (this._languageId = t),
              (this._version = n),
              (this._content = r),
              (this._lineOffsets = null);
          }
          return (
            Object.defineProperty(e.prototype, "uri", {
              get: function () {
                return this._uri;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "languageId", {
              get: function () {
                return this._languageId;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "version", {
              get: function () {
                return this._version;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.getText = function (e) {
              if (e) {
                var t = this.offsetAt(e.start),
                  n = this.offsetAt(e.end);
                return this._content.substring(t, n);
              }
              return this._content;
            }),
            (e.prototype.update = function (e, t) {
              (this._content = e.text),
                (this._version = t),
                (this._lineOffsets = null);
            }),
            (e.prototype.getLineOffsets = function () {
              if (null === this._lineOffsets) {
                for (
                  var e = [], t = this._content, n = !0, r = 0;
                  r < t.length;
                  r++
                ) {
                  n && (e.push(r), (n = !1));
                  var i = t.charAt(r);
                  (n = "\r" === i || "\n" === i),
                    "\r" === i &&
                      r + 1 < t.length &&
                      "\n" === t.charAt(r + 1) &&
                      r++;
                }
                n && t.length > 0 && e.push(t.length), (this._lineOffsets = e);
              }
              return this._lineOffsets;
            }),
            (e.prototype.positionAt = function (e) {
              e = Math.max(Math.min(e, this._content.length), 0);
              var t = this.getLineOffsets(),
                n = 0,
                i = t.length;
              if (0 === i) return r.create(0, e);
              for (; n < i; ) {
                var o = Math.floor((n + i) / 2);
                t[o] > e ? (i = o) : (n = o + 1);
              }
              var s = n - 1;
              return r.create(s, e - t[s]);
            }),
            (e.prototype.offsetAt = function (e) {
              var t = this.getLineOffsets();
              if (e.line >= t.length) return this._content.length;
              if (e.line < 0) return 0;
              var n = t[e.line],
                r =
                  e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
              return Math.max(Math.min(n + e.character, r), n);
            }),
            Object.defineProperty(e.prototype, "lineCount", {
              get: function () {
                return this.getLineOffsets().length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })();
      !(function (e) {
        var t = Object.prototype.toString;
        (e.defined = function (e) {
          return "undefined" !== typeof e;
        }),
          (e.undefined = function (e) {
            return "undefined" === typeof e;
          }),
          (e.boolean = function (e) {
            return !0 === e || !1 === e;
          }),
          (e.string = function (e) {
            return "[object String]" === t.call(e);
          }),
          (e.number = function (e) {
            return "[object Number]" === t.call(e);
          }),
          (e.func = function (e) {
            return "[object Function]" === t.call(e);
          }),
          (e.objectLiteral = function (e) {
            return null !== e && "object" === typeof e;
          }),
          (e.typedArray = function (e, t) {
            return Array.isArray(e) && e.every(t);
          });
      })(Z || (Z = {}));
    },
    "8ahE": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("MOv1");
      !(function (e) {
        e.type = new r.RequestType("textDocument/typeDefinition");
      })(t.TypeDefinitionRequest || (t.TypeDefinitionRequest = {}));
    },
    AL8H: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e) {
            this._value = e;
          }
          return (
            (e.prototype.asHex = function () {
              return this._value;
            }),
            (e.prototype.equals = function (e) {
              return this.asHex() === e.asHex();
            }),
            e
          );
        })(),
        o = (function (e) {
          function t() {
            return (
              e.call(
                this,
                [
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  "-",
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  "-",
                  "4",
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  "-",
                  t._oneOf(t._timeHighBits),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  "-",
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                ].join("")
              ) || this
            );
          }
          return (
            r(t, e),
            (t._oneOf = function (e) {
              return e[Math.floor(e.length * Math.random())];
            }),
            (t._randomHex = function () {
              return t._oneOf(t._chars);
            }),
            (t._chars = [
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "6",
              "7",
              "8",
              "9",
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
            ]),
            (t._timeHighBits = ["8", "9", "a", "b"]),
            t
          );
        })(i);
      function s() {
        return new o();
      }
      (t.empty = new i("00000000-0000-0000-0000-000000000000")), (t.v4 = s);
      var a = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      function c(e) {
        return a.test(e);
      }
      (t.isUUID = c),
        (t.parse = function (e) {
          if (!c(e)) throw new Error("invalid uuid");
          return new i(e);
        }),
        (t.generateUuid = function () {
          return s().asHex();
        });
    },
    BA4U: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n("fIkx"),
        i = n("Gkij");
      var o;
      !(function (e) {
        (e.None = Object.freeze({
          isCancellationRequested: !1,
          onCancellationRequested: r.Event.None,
        })),
          (e.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: r.Event.None,
          })),
          (e.is = function (t) {
            let n = t;
            return (
              n &&
              (n === e.None ||
                n === e.Cancelled ||
                (i.boolean(n.isCancellationRequested) &&
                  !!n.onCancellationRequested))
            );
          });
      })((o = t.CancellationToken || (t.CancellationToken = {})));
      const s = Object.freeze(function (e, t) {
        let n = setTimeout(e.bind(t), 0);
        return {
          dispose() {
            clearTimeout(n);
          },
        };
      });
      class a {
        constructor() {
          this._isCancelled = !1;
        }
        cancel() {
          this._isCancelled ||
            ((this._isCancelled = !0),
            this._emitter &&
              (this._emitter.fire(void 0), (this._emitter = void 0)));
        }
        get isCancellationRequested() {
          return this._isCancelled;
        }
        get onCancellationRequested() {
          return this._isCancelled
            ? s
            : (this._emitter || (this._emitter = new r.Emitter()),
              this._emitter.event);
        }
      }
      t.CancellationTokenSource = class {
        get token() {
          return this._token || (this._token = new a()), this._token;
        }
        cancel() {
          this._token ? this._token.cancel() : (this._token = o.Cancelled);
        }
        dispose() {
          this.cancel();
        }
      };
    },
    BOov: function (e, t, n) {
      "use strict";
      function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n("MOv1");
      (t.ErrorCodes = i.ErrorCodes),
        (t.ResponseError = i.ResponseError),
        (t.CancellationToken = i.CancellationToken),
        (t.CancellationTokenSource = i.CancellationTokenSource),
        (t.Disposable = i.Disposable),
        (t.Event = i.Event),
        (t.Emitter = i.Emitter),
        (t.Trace = i.Trace),
        (t.TraceFormat = i.TraceFormat),
        (t.SetTraceNotification = i.SetTraceNotification),
        (t.LogTraceNotification = i.LogTraceNotification),
        (t.RequestType = i.RequestType),
        (t.RequestType0 = i.RequestType0),
        (t.NotificationType = i.NotificationType),
        (t.NotificationType0 = i.NotificationType0),
        (t.MessageReader = i.MessageReader),
        (t.MessageWriter = i.MessageWriter),
        (t.ConnectionStrategy = i.ConnectionStrategy),
        (t.StreamMessageReader = i.StreamMessageReader),
        (t.StreamMessageWriter = i.StreamMessageWriter),
        (t.IPCMessageReader = i.IPCMessageReader),
        (t.IPCMessageWriter = i.IPCMessageWriter),
        (t.createClientPipeTransport = i.createClientPipeTransport),
        (t.createServerPipeTransport = i.createServerPipeTransport),
        (t.generateRandomPipeName = i.generateRandomPipeName),
        (t.createClientSocketTransport = i.createClientSocketTransport),
        (t.createServerSocketTransport = i.createServerSocketTransport),
        r(n("7Z1E")),
        r(n("+cRy")),
        (t.createProtocolConnection = function (e, t, n, r) {
          return i.createMessageConnection(e, t, n, r);
        });
    },
    CcFB: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("MOv1");
      !(function (e) {
        e.type = new r.RequestType("textDocument/implementation");
      })(t.ImplementationRequest || (t.ImplementationRequest = {}));
    },
    Chfy: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n("AL8H"),
        o = n("hC2b"),
        s = n("uoVZ"),
        a = n("BOov");
      function c(e, t) {
        return void 0 === e[t] && (e[t] = {}), e[t];
      }
      var u = (function (e) {
        function t(t) {
          return e.call(this, t, a.ImplementationRequest.type) || this;
        }
        return (
          r(t, e),
          (t.prototype.fillClientCapabilities = function (e) {
            c(c(e, "textDocument"), "implementation").dynamicRegistration = !0;
          }),
          (t.prototype.initialize = function (e, t) {
            if (e.implementationProvider)
              if (!0 === e.implementationProvider) {
                if (!t) return;
                this.register(this.messages, {
                  id: i.generateUuid(),
                  registerOptions: Object.assign({}, { documentSelector: t }),
                });
              } else {
                var n = e.implementationProvider,
                  r =
                    o.string(n.id) && n.id.length > 0 ? n.id : i.generateUuid(),
                  s = n.documentSelector || t;
                s &&
                  this.register(this.messages, {
                    id: r,
                    registerOptions: Object.assign({}, { documentSelector: s }),
                  });
              }
          }),
          (t.prototype.registerLanguageProvider = function (e) {
            var t = this._client,
              n = function (e, n, r) {
                return t
                  .sendRequest(
                    a.ImplementationRequest.type,
                    t.code2ProtocolConverter.asTextDocumentPositionParams(e, n),
                    r
                  )
                  .then(
                    t.protocol2CodeConverter.asDefinitionResult,
                    function (e) {
                      return (
                        t.logFailedRequest(a.ImplementationRequest.type, e),
                        Promise.resolve(null)
                      );
                    }
                  );
              },
              r = t.clientOptions.middleware;
            return s.languages.registerImplementationProvider(
              e.documentSelector,
              {
                provideImplementation: function (e, t, i) {
                  return r.provideImplementation
                    ? r.provideImplementation(e, t, i, n)
                    : n(e, t, i);
                },
              }
            );
          }),
          t
        );
      })(n("qRuN").TextDocumentFeature);
      t.ImplementationFeature = u;
    },
    DFRf: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (t) {
                  o(t);
                }
              }
              function c(e) {
                e.done
                  ? i(e.value)
                  : new n(function (t) {
                      t(e.value);
                    }).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(o) {
              return function (a) {
                return (function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (a) {
                      (o = [6, a]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n("hde3"),
        s = n("oL6p"),
        a = n("Gz0x");
      t.createVSCodeApi = function (e) {
        var t = this,
          n = function () {
            throw new Error("unsupported");
          },
          c = o.default,
          u = function (e, t) {
            (this.label = e), (this.kind = t);
          },
          d = (function () {
            function e(e, t) {
              (this.range = e), (this.command = t);
            }
            return (
              Object.defineProperty(e.prototype, "isResolved", {
                get: function () {
                  return !!this.command;
                },
                enumerable: !0,
                configurable: !0,
              }),
              e
            );
          })(),
          l = function (e, t) {
            (this.range = e), (this.target = t);
          },
          p = (function () {
            function e(e) {
              (this.value = e), (this.append = n), (this.contains = n);
            }
            return (
              (e.Empty = new e()),
              (e.QuickFix = new e("quickfix")),
              (e.Refactor = new e("refactor")),
              (e.RefactorExtract = new e("refactor.extract")),
              (e.RefactorInline = new e("refactor.inline")),
              (e.RefactorRewrite = new e("refactor.rewrite")),
              (e.Source = new e("source")),
              (e.SourceOrganizeImports = new e("source.organizeImports")),
              e
            );
          })(),
          f = {
            createFileSystemWatcher: function (t, n, r, i) {
              var o = e();
              if ("string" !== typeof t) throw new Error("unsupported");
              if (o.workspace.createFileSystemWatcher) {
                var s = o.workspace.createFileSystemWatcher(t, n, r, i);
                return Object.assign(s, {
                  ignoreCreateEvents: !!n,
                  ignoreChangeEvents: !!r,
                  ignoreDeleteEvents: !!i,
                });
              }
              return {
                ignoreCreateEvents: !!n,
                ignoreChangeEvents: !!r,
                ignoreDeleteEvents: !!i,
                onDidCreate: a.Event.None,
                onDidChange: a.Event.None,
                onDidDelete: a.Event.None,
                dispose: function () {},
              };
            },
            applyEdit: function (n) {
              return r(t, void 0, void 0, function () {
                var t;
                return i(this, function (r) {
                  if (((t = e()), a.WorkspaceEdit.is(n)))
                    return [2, t.workspace.applyEdit(n)];
                  throw new Error("unsupported");
                });
              });
            },
            getConfiguration: function (t, r) {
              var i = e().workspace,
                o = i.configurations
                  ? i.configurations.getConfiguration(
                      t,
                      r ? r.toString() : void 0
                    )
                  : void 0,
                s = {
                  get: function (e, t) {
                    return o ? o.get(e, t) : t;
                  },
                  has: function (e) {
                    return !!o && o.has(e);
                  },
                  inspect: n,
                  update: n,
                };
              return Object.assign(s, {
                toJSON: function () {
                  return o ? o.toJSON() : void 0;
                },
              });
            },
            get onDidChangeConfiguration() {
              var t = e();
              return t.workspace.configurations
                ? t.workspace.configurations.onDidChangeConfiguration
                : a.Event.None;
            },
            get workspaceFolders() {
              var t = e().workspace.rootUri;
              if (t) {
                var n = c.parse(t);
                return [{ uri: n, index: 0, name: n.toString() }];
              }
            },
            get textDocuments() {
              return e().workspace.textDocuments;
            },
            get onDidOpenTextDocument() {
              return e().workspace.onDidOpenTextDocument;
            },
            get onDidCloseTextDocument() {
              return e().workspace.onDidCloseTextDocument;
            },
            get onDidChangeTextDocument() {
              var t = e();
              return function (e, n, r) {
                return t.workspace.onDidChangeTextDocument(
                  function (t) {
                    var r = t.textDocument,
                      i = t.contentChanges;
                    e.bind(n)({ document: r, contentChanges: i });
                  },
                  void 0,
                  r
                );
              };
            },
            get onWillSaveTextDocument() {
              var t = e().workspace.onWillSaveTextDocument;
              return t
                ? function (e, n, r) {
                    return t(
                      function (t) {
                        var r = t.textDocument,
                          i = t.reason,
                          o = t.waitUntil;
                        e.bind(n)({
                          document: r,
                          reason: i,
                          waitUntil: function (e) {
                            o && o(e);
                          },
                        });
                      },
                      void 0,
                      r
                    );
                  }
                : a.Event.None;
            },
            get onDidSaveTextDocument() {
              return e().workspace.onDidSaveTextDocument || a.Event.None;
            },
            onDidChangeWorkspaceFolders: a.Event.None,
            getWorkspaceFolder: n,
            asRelativePath: n,
            updateWorkspaceFolders: n,
            findFiles: n,
            saveAll: n,
            openTextDocument: n,
            registerTextDocumentContentProvider: n,
            registerTaskProvider: n,
            registerFileSystemProvider: n,
            rootPath: void 0,
            name: void 0,
          },
          m = {
            match: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              if (!a.DocumentIdentifier.is(n))
                throw new Error("unexpected document: " + JSON.stringify(n));
              return e().languages.match(t, n) ? 1 : 0;
            },
            createDiagnosticCollection: function (t) {
              var r = e(),
                i = r.languages.createDiagnosticCollection
                  ? r.languages.createDiagnosticCollection(t)
                  : void 0;
              return {
                name: t || "default",
                set: function (e, t) {
                  i && (t ? i.set(e.toString(), t) : i.set(e.toString(), []));
                },
                dispose: function () {
                  i && i.dispose();
                },
                delete: n,
                clear: n,
                forEach: n,
                get: n,
                has: n,
              };
            },
            registerCompletionItemProvider: function (t, n) {
              for (var r = [], i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var o = e().languages;
              if (!o.registerCompletionItemProvider)
                return s.Disposable.create(function () {});
              var c = n.resolveCompletionItem;
              return o.registerCompletionItemProvider.apply(
                o,
                [
                  t,
                  {
                    provideCompletionItems: function (e, t) {
                      var r = e.textDocument,
                        i = e.position,
                        o = e.context;
                      return n.provideCompletionItems(
                        r,
                        i,
                        t,
                        o || { triggerKind: a.CompletionTriggerKind.Invoked }
                      );
                    },
                    resolveCompletionItem: c
                      ? function (e, t) {
                          return c(e, t);
                        }
                      : void 0,
                  },
                ].concat(r)
              );
            },
            registerCodeActionsProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerCodeActionsProvider
                ? r.registerCodeActionsProvider(t, {
                    provideCodeActions: function (e, t) {
                      var r = e.textDocument,
                        i = e.range,
                        o = e.context;
                      return n.provideCodeActions(r, i, o, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerCodeLensProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              if (!r.registerCodeLensProvider)
                return s.Disposable.create(function () {});
              var i = n.resolveCodeLens;
              return r.registerCodeLensProvider(t, {
                provideCodeLenses: function (e, t) {
                  var r = e.textDocument;
                  return n.provideCodeLenses(r, t);
                },
                resolveCodeLens: i
                  ? function (e, t) {
                      return i(e, t);
                    }
                  : void 0,
              });
            },
            registerDefinitionProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerDefinitionProvider
                ? r.registerDefinitionProvider(t, {
                    provideDefinition: function (e, t) {
                      var r = e.textDocument,
                        i = e.position;
                      return n.provideDefinition(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerImplementationProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerImplementationProvider
                ? r.registerImplementationProvider(t, {
                    provideImplementation: function (e, t) {
                      var r = e.textDocument,
                        i = e.position;
                      return n.provideImplementation(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerTypeDefinitionProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerTypeDefinitionProvider
                ? r.registerTypeDefinitionProvider(t, {
                    provideTypeDefinition: function (e, t) {
                      var r = e.textDocument,
                        i = e.position;
                      return n.provideTypeDefinition(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerHoverProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerHoverProvider
                ? r.registerHoverProvider(t, {
                    provideHover: function (e, t) {
                      var r = e.textDocument,
                        i = e.position;
                      return n.provideHover(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerDocumentHighlightProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerDocumentHighlightProvider
                ? r.registerDocumentHighlightProvider(t, {
                    provideDocumentHighlights: function (e, t) {
                      var r = e.textDocument,
                        i = e.position;
                      return n.provideDocumentHighlights(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerDocumentSymbolProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerDocumentSymbolProvider
                ? r.registerDocumentSymbolProvider(t, {
                    provideDocumentSymbols: function (e, t) {
                      var r = e.textDocument;
                      return n.provideDocumentSymbols(r, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerWorkspaceSymbolProvider: function (t) {
              var n = e().languages;
              return n.registerWorkspaceSymbolProvider
                ? n.registerWorkspaceSymbolProvider({
                    provideWorkspaceSymbols: function (e, n) {
                      var r = e.query;
                      return t.provideWorkspaceSymbols(r, n);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerReferenceProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerReferenceProvider
                ? r.registerReferenceProvider(t, {
                    provideReferences: function (e, t) {
                      var r = e.textDocument,
                        i = e.position,
                        o = e.context;
                      return n.provideReferences(r, i, o, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerRenameProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerRenameProvider
                ? r.registerRenameProvider(t, {
                    provideRenameEdits: function (e, t) {
                      var r = e.textDocument,
                        i = e.position,
                        o = e.newName;
                      return n.provideRenameEdits(r, i, o, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerDocumentFormattingEditProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerDocumentFormattingEditProvider
                ? r.registerDocumentFormattingEditProvider(t, {
                    provideDocumentFormattingEdits: function (e, t) {
                      var r = e.textDocument,
                        i = e.options;
                      return n.provideDocumentFormattingEdits(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerDocumentRangeFormattingEditProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerDocumentRangeFormattingEditProvider
                ? r.registerDocumentRangeFormattingEditProvider(t, {
                    provideDocumentRangeFormattingEdits: function (e, t) {
                      var r = e.textDocument,
                        i = e.range,
                        o = e.options;
                      return n.provideDocumentRangeFormattingEdits(r, i, o, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerOnTypeFormattingEditProvider: function (t, n, r) {
              for (var i = [], o = 3; o < arguments.length; o++)
                i[o - 3] = arguments[o];
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var c = e().languages;
              return c.registerOnTypeFormattingEditProvider
                ? c.registerOnTypeFormattingEditProvider.apply(
                    c,
                    [
                      t,
                      {
                        provideOnTypeFormattingEdits: function (e, t) {
                          var r = e.textDocument,
                            i = e.position,
                            o = e.ch,
                            s = e.options;
                          return n.provideOnTypeFormattingEdits(r, i, o, s, t);
                        },
                      },
                      r,
                    ].concat(i)
                  )
                : s.Disposable.create(function () {});
            },
            registerSignatureHelpProvider: function (t, n) {
              for (var r = [], i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var o = e().languages;
              return o.registerSignatureHelpProvider
                ? o.registerSignatureHelpProvider.apply(
                    o,
                    [
                      t,
                      {
                        provideSignatureHelp: function (e, t) {
                          var r = e.textDocument,
                            i = e.position;
                          return n.provideSignatureHelp(r, i, t);
                        },
                      },
                    ].concat(r)
                  )
                : s.Disposable.create(function () {});
            },
            registerDocumentLinkProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              if (!r.registerDocumentLinkProvider)
                return s.Disposable.create(function () {});
              var i = n.resolveDocumentLink;
              return r.registerDocumentLinkProvider(t, {
                provideDocumentLinks: function (e, t) {
                  var r = e.textDocument;
                  return n.provideDocumentLinks(r, t);
                },
                resolveDocumentLink: i
                  ? function (e, t) {
                      return i(e, t);
                    }
                  : void 0,
              });
            },
            registerColorProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerColorProvider
                ? r.registerColorProvider(t, {
                    provideDocumentColors: function (e, t) {
                      var r = e.textDocument;
                      return n.provideDocumentColors(r, t);
                    },
                    provideColorPresentations: function (e, t) {
                      var r = e.textDocument,
                        i = e.color,
                        o = e.range;
                      return n.provideColorPresentations(
                        i,
                        { document: r, range: o },
                        t
                      );
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerFoldingRangeProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error("unexpected selector: " + JSON.stringify(t));
              var r = e().languages;
              return r.registerFoldingRangeProvider
                ? r.registerFoldingRangeProvider(t, {
                    provideFoldingRanges: function (e, t) {
                      var r = e.textDocument;
                      return n.provideFoldingRanges(r, {}, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            getLanguages: n,
            getDiagnostics: n,
            setLanguageConfiguration: n,
            onDidChangeDiagnostics: n,
          };
        function g(t, n, r) {
          if ("string" !== typeof n)
            throw new Error("unexpected message: " + JSON.stringify(n));
          var i = n;
          if (void 0 !== r && !Array.isArray(r))
            throw new Error("unexpected actions: " + JSON.stringify(r));
          var o = r || [],
            s = e().window;
          return s
            ? s.showMessage.apply(s, [t, i].concat(o))
            : Promise.resolve(void 0);
        }
        var h = {
            showInformationMessage: g.bind(void 0, a.MessageType.Info),
            showWarningMessage: g.bind(void 0, a.MessageType.Warning),
            showErrorMessage: g.bind(void 0, a.MessageType.Error),
            createOutputChannel: function (t) {
              var r = e().window,
                i = r ? r.createOutputChannel : void 0,
                o = i ? i.bind(r)(t) : void 0;
              return {
                name: t,
                append: o.append.bind(o),
                appendLine: o.appendLine.bind(o),
                clear: n,
                show: o.show.bind(o),
                hide: n,
                dispose: o.dispose.bind(o),
              };
            },
            showTextDocument: n,
            createTextEditorDecorationType: n,
            showQuickPick: n,
            showWorkspaceFolderPick: n,
            showOpenDialog: n,
            showSaveDialog: n,
            showInputBox: n,
            createWebviewPanel: n,
            setStatusBarMessage: n,
            withScmProgress: n,
            withProgress: n,
            createStatusBarItem: n,
            createTerminal: n,
            registerTreeDataProvider: n,
            createTreeView: n,
            registerWebviewPanelSerializer: n,
            get activeTextEditor() {
              return n();
            },
            get visibleTextEditors() {
              return n();
            },
            onDidChangeActiveTextEditor: n,
            onDidChangeVisibleTextEditors: n,
            onDidChangeTextEditorSelection: n,
            onDidChangeTextEditorVisibleRanges: n,
            onDidChangeTextEditorOptions: n,
            onDidChangeTextEditorViewColumn: n,
            onDidCloseTerminal: n,
            get state() {
              return n();
            },
            onDidChangeWindowState: n,
          },
          v = {
            registerCommand: function (t, n, r) {
              var i = e().commands;
              return i
                ? i.registerCommand(t, n, r)
                : s.Disposable.create(function () {});
            },
            registerTextEditorCommand: n,
            executeCommand: n,
            getCommands: n,
          },
          y = (function () {
            function e(e) {
              this.callOnDispose = e;
            }
            return (
              (e.prototype.dispose = function () {
                this.callOnDispose();
              }),
              e
            );
          })();
        return {
          workspace: f,
          languages: m,
          window: h,
          commands: v,
          Uri: c,
          CompletionItem: u,
          CodeLens: d,
          DocumentLink: l,
          CodeActionKind: p,
          Disposable: y,
        };
      };
    },
    Gkij: function (e, t, n) {
      "use strict";
      function r(e) {
        return "string" === typeof e || e instanceof String;
      }
      function i(e) {
        return Array.isArray(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.boolean = function (e) {
          return !0 === e || !1 === e;
        }),
        (t.string = r),
        (t.number = function (e) {
          return "number" === typeof e || e instanceof Number;
        }),
        (t.error = function (e) {
          return e instanceof Error;
        }),
        (t.func = function (e) {
          return "function" === typeof e;
        }),
        (t.array = i),
        (t.stringArray = function (e) {
          return i(e) && e.every((e) => r(e));
        });
    },
    Gz0x: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("BOov"),
        i = n("C+6V");
      (t.Disposable = i.Disposable),
        (t.CancellationToken = i.CancellationToken),
        (t.Event = i.Event),
        (t.Emitter = i.Emitter),
        (function (e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        })(n("BOov")),
        (function (e) {
          var t = window,
            n = Symbol("Services");
          (e.get = function () {
            var e = t[n];
            if (!e)
              throw new Error(
                "Language Client services has not been installed"
              );
            return e;
          }),
            (e.install = function (e) {
              t[n] &&
                console.error(
                  new Error("Language Client services has been overriden")
                ),
                (t[n] = e);
            });
        })(t.Services || (t.Services = {})),
        (t.isDocumentSelector = function (e) {
          return (
            !(!e || !Array.isArray(e)) &&
            e.every(function (e) {
              return "string" === typeof e || r.DocumentFilter.is(e);
            })
          );
        }),
        (function (e) {
          e.is = function (e) {
            return !!e && "uri" in e && "languageId" in e;
          };
        })(t.DocumentIdentifier || (t.DocumentIdentifier = {})),
        (function (e) {
          (e[(e.Global = 1)] = "Global"),
            (e[(e.Workspace = 2)] = "Workspace"),
            (e[(e.WorkspaceFolder = 3)] = "WorkspaceFolder");
        })(t.ConfigurationTarget || (t.ConfigurationTarget = {}));
    },
    I0O9: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n("tpqs"),
          i = n("PENG"),
          o = n("HEbw"),
          s = n("RUQ2"),
          a = n("K4MX"),
          c = n("k5Vz");
        (t.generateRandomPipeName = function () {
          const t = o.randomBytes(21).toString("hex");
          return "win32" === e.platform
            ? `\\\\.\\pipe\\vscode-jsonrpc-${t}-sock`
            : r.join(i.tmpdir(), `vscode-${t}.sock`);
        }),
          (t.createClientPipeTransport = function (e, t = "utf-8") {
            let n,
              r = new Promise((e, t) => {
                n = e;
              });
            return new Promise((i, o) => {
              let u = s.createServer((e) => {
                u.close(),
                  n([
                    new a.SocketMessageReader(e, t),
                    new c.SocketMessageWriter(e, t),
                  ]);
              });
              u.on("error", o),
                u.listen(e, () => {
                  u.removeListener("error", o), i({ onConnected: () => r });
                });
            });
          }),
          (t.createServerPipeTransport = function (e, t = "utf-8") {
            const n = s.createConnection(e);
            return [
              new a.SocketMessageReader(n, t),
              new c.SocketMessageWriter(n, t),
            ];
          });
      }.call(this, n("8oxB")));
    },
    K4MX: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n("fIkx"),
          i = n("Gkij");
        let o = 8192,
          s = e.from("\r", "ascii")[0],
          a = e.from("\n", "ascii")[0];
        class c {
          constructor(t = "utf8") {
            (this.encoding = t),
              (this.index = 0),
              (this.buffer = e.allocUnsafe(o));
          }
          append(t) {
            var n = t;
            if ("string" === typeof t) {
              var r = t,
                i = e.byteLength(r, this.encoding);
              (n = e.allocUnsafe(i)).write(r, 0, i, this.encoding);
            }
            if (this.buffer.length - this.index >= n.length)
              n.copy(this.buffer, this.index, 0, n.length);
            else {
              var s = (Math.ceil((this.index + n.length) / o) + 1) * o;
              0 === this.index
                ? ((this.buffer = e.allocUnsafe(s)),
                  n.copy(this.buffer, 0, 0, n.length))
                : (this.buffer = e.concat(
                    [this.buffer.slice(0, this.index), n],
                    s
                  ));
            }
            this.index += n.length;
          }
          tryReadHeaders() {
            let e,
              t = 0;
            for (
              ;
              t + 3 < this.index &&
              (this.buffer[t] !== s ||
                this.buffer[t + 1] !== a ||
                this.buffer[t + 2] !== s ||
                this.buffer[t + 3] !== a);

            )
              t++;
            if (t + 3 >= this.index) return e;
            (e = Object.create(null)),
              this.buffer
                .toString("ascii", 0, t)
                .split("\r\n")
                .forEach((t) => {
                  let n = t.indexOf(":");
                  if (-1 === n)
                    throw new Error(
                      "Message header must separate key and value using :"
                    );
                  let r = t.substr(0, n),
                    i = t.substr(n + 1).trim();
                  e[r] = i;
                });
            let n = t + 4;
            return (
              (this.buffer = this.buffer.slice(n)),
              (this.index = this.index - n),
              e
            );
          }
          tryReadContent(e) {
            if (this.index < e) return null;
            let t = this.buffer.toString(this.encoding, 0, e),
              n = e;
            return (
              this.buffer.copy(this.buffer, 0, n),
              (this.index = this.index - n),
              t
            );
          }
          get numberOfBytes() {
            return this.index;
          }
        }
        !(function (e) {
          e.is = function (e) {
            let t = e;
            return (
              t &&
              i.func(t.listen) &&
              i.func(t.dispose) &&
              i.func(t.onError) &&
              i.func(t.onClose) &&
              i.func(t.onPartialMessage)
            );
          };
        })(t.MessageReader || (t.MessageReader = {}));
        class u {
          constructor() {
            (this.errorEmitter = new r.Emitter()),
              (this.closeEmitter = new r.Emitter()),
              (this.partialMessageEmitter = new r.Emitter());
          }
          dispose() {
            this.errorEmitter.dispose(), this.closeEmitter.dispose();
          }
          get onError() {
            return this.errorEmitter.event;
          }
          fireError(e) {
            this.errorEmitter.fire(this.asError(e));
          }
          get onClose() {
            return this.closeEmitter.event;
          }
          fireClose() {
            this.closeEmitter.fire(void 0);
          }
          get onPartialMessage() {
            return this.partialMessageEmitter.event;
          }
          firePartialMessage(e) {
            this.partialMessageEmitter.fire(e);
          }
          asError(e) {
            return e instanceof Error
              ? e
              : new Error(
                  `Reader recevied error. Reason: ${
                    i.string(e.message) ? e.message : "unknown"
                  }`
                );
          }
        }
        t.AbstractMessageReader = u;
        class d extends u {
          constructor(e, t = "utf8") {
            super(),
              (this.readable = e),
              (this.buffer = new c(t)),
              (this._partialMessageTimeout = 1e4);
          }
          set partialMessageTimeout(e) {
            this._partialMessageTimeout = e;
          }
          get partialMessageTimeout() {
            return this._partialMessageTimeout;
          }
          listen(e) {
            (this.nextMessageLength = -1),
              (this.messageToken = 0),
              (this.partialMessageTimer = void 0),
              (this.callback = e),
              this.readable.on("data", (e) => {
                this.onData(e);
              }),
              this.readable.on("error", (e) => this.fireError(e)),
              this.readable.on("close", () => this.fireClose());
          }
          onData(e) {
            for (this.buffer.append(e); ; ) {
              if (-1 === this.nextMessageLength) {
                let e = this.buffer.tryReadHeaders();
                if (!e) return;
                let t = e["Content-Length"];
                if (!t)
                  throw new Error(
                    "Header must provide a Content-Length property."
                  );
                let n = parseInt(t);
                if (isNaN(n))
                  throw new Error("Content-Length value must be a number.");
                this.nextMessageLength = n;
              }
              var t = this.buffer.tryReadContent(this.nextMessageLength);
              if (null === t) return void this.setPartialMessageTimer();
              this.clearPartialMessageTimer(),
                (this.nextMessageLength = -1),
                this.messageToken++;
              var n = JSON.parse(t);
              this.callback(n);
            }
          }
          clearPartialMessageTimer() {
            this.partialMessageTimer &&
              (clearTimeout(this.partialMessageTimer),
              (this.partialMessageTimer = void 0));
          }
          setPartialMessageTimer() {
            this.clearPartialMessageTimer(),
              this._partialMessageTimeout <= 0 ||
                (this.partialMessageTimer = setTimeout(
                  (e, t) => {
                    (this.partialMessageTimer = void 0),
                      e === this.messageToken &&
                        (this.firePartialMessage({
                          messageToken: e,
                          waitingTime: t,
                        }),
                        this.setPartialMessageTimer());
                  },
                  this._partialMessageTimeout,
                  this.messageToken,
                  this._partialMessageTimeout
                ));
          }
        }
        t.StreamMessageReader = d;
        t.IPCMessageReader = class extends u {
          constructor(e) {
            super(), (this.process = e);
            let t = this.process;
            t.on("error", (e) => this.fireError(e)),
              t.on("close", () => this.fireClose());
          }
          listen(e) {
            this.process.on("message", e);
          }
        };
        t.SocketMessageReader = class extends d {
          constructor(e, t = "utf-8") {
            super(e, t);
          }
        };
      }.call(this, n("HDXh").Buffer));
    },
    LB4s: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__values) ||
          function (e) {
            var t = "function" === typeof Symbol && e[Symbol.iterator],
              n = 0;
            return t
              ? t.call(e)
              : {
                  next: function () {
                    return (
                      e && n >= e.length && (e = void 0),
                      { value: e && e[n++], done: !e }
                    );
                  },
                };
          },
        i =
          (this && this.__read) ||
          function (e, t) {
            var n = "function" === typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r,
              i,
              o = n.call(e),
              s = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                s.push(r.value);
            } catch (a) {
              i = { error: a };
            } finally {
              try {
                r && !r.done && (n = o.return) && n.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return s;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o,
        s = n("uoVZ"),
        a = n("BOov"),
        c = n("hC2b"),
        u = n("QGVK"),
        d = n("h0WC"),
        l = n("ojtU");
      !(function (e) {
        e.is = function (e) {
          var t = e;
          return t && c.string(t.language) && c.string(t.value);
        };
      })(o || (o = {})),
        (t.createConverter = function (e) {
          var t =
            e ||
            function (e) {
              return s.Uri.parse(e);
            };
          function n(e) {
            return t(e);
          }
          function p(e) {
            return e.map(f);
          }
          function f(e) {
            var t = new s.Diagnostic(h(e.range), e.message, v(e.severity));
            return (
              (c.number(e.code) || c.string(e.code)) && (t.code = e.code),
              e.source && (t.source = e.source),
              e.relatedInformation &&
                (t.relatedInformation = e.relatedInformation.map(m)),
              t
            );
          }
          function m(e) {
            return new s.DiagnosticRelatedInformation(T(e.location), e.message);
          }
          function g(e) {
            if (e) return new s.Position(e.line, e.character);
          }
          function h(e) {
            if (e) return new s.Range(g(e.start), g(e.end));
          }
          function v(e) {
            if (void 0 === e || null === e) return s.DiagnosticSeverity.Error;
            switch (e) {
              case a.DiagnosticSeverity.Error:
                return s.DiagnosticSeverity.Error;
              case a.DiagnosticSeverity.Warning:
                return s.DiagnosticSeverity.Warning;
              case a.DiagnosticSeverity.Information:
                return s.DiagnosticSeverity.Information;
              case a.DiagnosticSeverity.Hint:
                return s.DiagnosticSeverity.Hint;
            }
            return s.DiagnosticSeverity.Error;
          }
          function y(e) {
            if (c.string(e)) return e;
            switch (e.kind) {
              case a.MarkupKind.Markdown:
                return new s.MarkdownString(e.value);
              case a.MarkupKind.PlainText:
                return e.value;
              default:
                return (
                  "Unsupported Markup content received. Kind is: " + e.kind
                );
            }
          }
          function C(e) {
            var t = new u.default(e.label);
            e.detail && (t.detail = e.detail),
              e.documentation &&
                ((t.documentation = y(e.documentation)),
                (t.documentationFormat = c.string(e.documentation)
                  ? "$string"
                  : e.documentation.kind)),
              e.filterText && (t.filterText = e.filterText);
            var n,
              r = (function (e) {
                return e.textEdit
                  ? e.insertTextFormat === a.InsertTextFormat.Snippet
                    ? {
                        text: new s.SnippetString(e.textEdit.newText),
                        range: h(e.textEdit.range),
                        fromEdit: !0,
                      }
                    : {
                        text: e.textEdit.newText,
                        range: h(e.textEdit.range),
                        fromEdit: !0,
                      }
                  : e.insertText
                  ? e.insertTextFormat === a.InsertTextFormat.Snippet
                    ? { text: new s.SnippetString(e.insertText), fromEdit: !1 }
                    : { text: e.insertText, fromEdit: !1 }
                  : void 0;
              })(e);
            if (
              (r &&
                ((t.insertText = r.text),
                (t.range = r.range),
                (t.fromEdit = r.fromEdit)),
              c.number(e.kind))
            ) {
              var o = i(
                  ((n = e.kind),
                  a.CompletionItemKind.Text <= n &&
                  n <= a.CompletionItemKind.TypeParameter
                    ? [n - 1, void 0]
                    : [s.CompletionItemKind.Text, n]),
                  2
                ),
                d = o[0],
                l = o[1];
              (t.kind = d), l && (t.originalItemKind = l);
            }
            return (
              e.sortText && (t.sortText = e.sortText),
              e.additionalTextEdits &&
                (t.additionalTextEdits = w(e.additionalTextEdits)),
              c.stringArray(e.commitCharacters) &&
                (t.commitCharacters = e.commitCharacters.slice()),
              e.command && (t.command = M(e.command)),
              (!0 !== e.deprecated && !1 !== e.deprecated) ||
                (t.deprecated = e.deprecated),
              (!0 !== e.preselect && !1 !== e.preselect) ||
                (t.preselect = e.preselect),
              void 0 !== e.data && (t.data = e.data),
              t
            );
          }
          function D(e) {
            if (e) return new s.TextEdit(h(e.range), e.newText);
          }
          function w(e) {
            if (e) return e.map(D);
          }
          function x(e) {
            return e.map(b);
          }
          function b(e) {
            var t = new s.SignatureInformation(e.label);
            return (
              e.documentation && (t.documentation = y(e.documentation)),
              e.parameters && (t.parameters = _(e.parameters)),
              t
            );
          }
          function _(e) {
            return e.map(R);
          }
          function R(e) {
            var t = new s.ParameterInformation(e.label);
            return e.documentation && (t.documentation = y(e.documentation)), t;
          }
          function T(e) {
            if (e) return new s.Location(t(e.uri), h(e.range));
          }
          function P(e) {
            var t = new s.DocumentHighlight(h(e.range));
            return c.number(e.kind) && (t.kind = S(e.kind)), t;
          }
          function S(e) {
            switch (e) {
              case a.DocumentHighlightKind.Text:
                return s.DocumentHighlightKind.Text;
              case a.DocumentHighlightKind.Read:
                return s.DocumentHighlightKind.Read;
              case a.DocumentHighlightKind.Write:
                return s.DocumentHighlightKind.Write;
            }
            return s.DocumentHighlightKind.Text;
          }
          function k(e) {
            return e <= a.SymbolKind.TypeParameter
              ? e - 1
              : s.SymbolKind.Property;
          }
          function E(e, n) {
            var r = new s.SymbolInformation(
              e.name,
              k(e.kind),
              h(e.location.range),
              e.location.uri ? t(e.location.uri) : n
            );
            return e.containerName && (r.containerName = e.containerName), r;
          }
          function O(e) {
            var t,
              n,
              i = new s.DocumentSymbol(
                e.name,
                void 0 !== e.detail ? e.detail : e.name,
                k(e.kind),
                h(e.range),
                h(e.selectionRange)
              );
            if (void 0 !== e.children && e.children.length > 0) {
              var o = [];
              try {
                for (
                  var a = r(e.children), c = a.next();
                  !c.done;
                  c = a.next()
                ) {
                  var u = c.value;
                  o.push(O(u));
                }
              } catch (d) {
                t = { error: d };
              } finally {
                try {
                  c && !c.done && (n = a.return) && n.call(a);
                } finally {
                  if (t) throw t.error;
                }
              }
              i.children = o;
            }
            return i;
          }
          function M(e) {
            var t = { title: e.title, command: e.command };
            return e.arguments && (t.arguments = e.arguments), t;
          }
          var F = new Map();
          function q(e) {
            if (e) {
              var t = new d.default(h(e.range));
              return (
                e.command && (t.command = M(e.command)),
                void 0 !== e.data && null !== e.data && (t.data = e.data),
                t
              );
            }
          }
          function I(e) {
            if (e) {
              var n = new s.WorkspaceEdit();
              return (
                e.documentChanges
                  ? e.documentChanges.forEach(function (e) {
                      n.set(t(e.textDocument.uri), w(e.edits));
                    })
                  : e.changes &&
                    Object.keys(e.changes).forEach(function (r) {
                      n.set(t(r), w(e.changes[r]));
                    }),
                n
              );
            }
          }
          function N(e) {
            var t = h(e.range),
              r = e.target ? n(e.target) : void 0,
              i = new l.default(t, r);
            return void 0 !== e.data && null !== e.data && (i.data = e.data), i;
          }
          function L(e) {
            return new s.Color(e.red, e.green, e.blue, e.alpha);
          }
          function K(e) {
            return new s.ColorInformation(h(e.range), L(e.color));
          }
          function j(e) {
            var t = new s.ColorPresentation(e.label);
            return (
              (t.additionalTextEdits = w(e.additionalTextEdits)),
              e.textEdit && (t.textEdit = D(e.textEdit)),
              t
            );
          }
          function A(e) {
            if (e)
              switch (e) {
                case a.FoldingRangeKind.Comment:
                  return s.FoldingRangeKind.Comment;
                case a.FoldingRangeKind.Imports:
                  return s.FoldingRangeKind.Imports;
                case a.FoldingRangeKind.Region:
                  return s.FoldingRangeKind.Region;
              }
          }
          function W(e) {
            return new s.FoldingRange(e.startLine, e.endLine, A(e.kind));
          }
          return (
            F.set("", s.CodeActionKind.Empty),
            F.set(a.CodeActionKind.QuickFix, s.CodeActionKind.QuickFix),
            F.set(a.CodeActionKind.Refactor, s.CodeActionKind.Refactor),
            F.set(
              a.CodeActionKind.RefactorExtract,
              s.CodeActionKind.RefactorExtract
            ),
            F.set(
              a.CodeActionKind.RefactorInline,
              s.CodeActionKind.RefactorInline
            ),
            F.set(
              a.CodeActionKind.RefactorRewrite,
              s.CodeActionKind.RefactorRewrite
            ),
            F.set(a.CodeActionKind.Source, s.CodeActionKind.Source),
            F.set(
              a.CodeActionKind.SourceOrganizeImports,
              s.CodeActionKind.SourceOrganizeImports
            ),
            {
              asUri: n,
              asDiagnostics: p,
              asDiagnostic: f,
              asRange: h,
              asPosition: g,
              asDiagnosticSeverity: v,
              asHover: function (e) {
                if (e)
                  return new s.Hover(
                    (function (e) {
                      var t, n;
                      if (c.string(e)) return new s.MarkdownString(e);
                      if (o.is(e))
                        return (i = new s.MarkdownString()).appendCodeblock(
                          e.value,
                          e.language
                        );
                      if (Array.isArray(e)) {
                        var i = [];
                        try {
                          for (
                            var u = r(e), d = u.next();
                            !d.done;
                            d = u.next()
                          ) {
                            var l = d.value,
                              p = new s.MarkdownString();
                            o.is(l)
                              ? p.appendCodeblock(l.value, l.language)
                              : p.appendMarkdown(l),
                              i.push(p);
                          }
                        } catch (f) {
                          t = { error: f };
                        } finally {
                          try {
                            d && !d.done && (n = u.return) && n.call(u);
                          } finally {
                            if (t) throw t.error;
                          }
                        }
                        return i;
                      }
                      switch (((i = void 0), e.kind)) {
                        case a.MarkupKind.Markdown:
                          return new s.MarkdownString(e.value);
                        case a.MarkupKind.PlainText:
                          return (
                            (i = new s.MarkdownString()).appendText(e.value), i
                          );
                        default:
                          return (
                            (i = new s.MarkdownString()).appendText(
                              "Unsupported Markup content received. Kind is: " +
                                e.kind
                            ),
                            i
                          );
                      }
                    })(e.contents),
                    h(e.range)
                  );
              },
              asCompletionResult: function (e) {
                if (e) {
                  if (Array.isArray(e)) return e.map(C);
                  var t = e;
                  return new s.CompletionList(t.items.map(C), t.isIncomplete);
                }
              },
              asCompletionItem: C,
              asTextEdit: D,
              asTextEdits: w,
              asSignatureHelp: function (e) {
                if (e) {
                  var t = new s.SignatureHelp();
                  return (
                    c.number(e.activeSignature)
                      ? (t.activeSignature = e.activeSignature)
                      : (t.activeSignature = 0),
                    c.number(e.activeParameter)
                      ? (t.activeParameter = e.activeParameter)
                      : (t.activeParameter = 0),
                    e.signatures && (t.signatures = x(e.signatures)),
                    t
                  );
                }
              },
              asSignatureInformations: x,
              asSignatureInformation: b,
              asParameterInformations: _,
              asParameterInformation: R,
              asDefinitionResult: function (e) {
                if (e)
                  return c.array(e)
                    ? e.map(function (e) {
                        return T(e);
                      })
                    : T(e);
              },
              asLocation: T,
              asReferences: function (e) {
                if (e)
                  return e.map(function (e) {
                    return T(e);
                  });
              },
              asDocumentHighlights: function (e) {
                if (e) return e.map(P);
              },
              asDocumentHighlight: P,
              asDocumentHighlightKind: S,
              asSymbolInformations: function (e, t) {
                if (e)
                  return e.map(function (e) {
                    return E(e, t);
                  });
              },
              asSymbolInformation: E,
              asDocumentSymbols: function (e) {
                if (void 0 !== e && null !== e) return e.map(O);
              },
              asDocumentSymbol: O,
              asCommand: M,
              asCommands: function (e) {
                if (e) return e.map(M);
              },
              asCodeAction: function (e) {
                if (void 0 !== e && null !== e) {
                  var t = new s.CodeAction(e.title);
                  return (
                    void 0 !== e.kind &&
                      (t.kind = (function (e) {
                        var t, n;
                        if (void 0 !== e && null !== e) {
                          var i = F.get(e);
                          if (i) return i;
                          var o = e.split(".");
                          i = s.CodeActionKind.Empty;
                          try {
                            for (
                              var a = r(o), c = a.next();
                              !c.done;
                              c = a.next()
                            ) {
                              var u = c.value;
                              i = i.append(u);
                            }
                          } catch (d) {
                            t = { error: d };
                          } finally {
                            try {
                              c && !c.done && (n = a.return) && n.call(a);
                            } finally {
                              if (t) throw t.error;
                            }
                          }
                          return i;
                        }
                      })(e.kind)),
                    e.diagnostics && (t.diagnostics = p(e.diagnostics)),
                    e.edit && (t.edit = I(e.edit)),
                    e.command && (t.command = M(e.command)),
                    t
                  );
                }
              },
              asCodeLens: q,
              asCodeLenses: function (e) {
                if (e)
                  return e.map(function (e) {
                    return q(e);
                  });
              },
              asWorkspaceEdit: I,
              asDocumentLink: N,
              asDocumentLinks: function (e) {
                if (e) return e.map(N);
              },
              asFoldingRangeKind: A,
              asFoldingRange: W,
              asFoldingRanges: function (e) {
                if (Array.isArray(e)) return e.map(W);
              },
              asColor: L,
              asColorInformation: K,
              asColorInformations: function (e) {
                if (Array.isArray(e)) return e.map(K);
              },
              asColorPresentation: j,
              asColorPresentations: function (e) {
                if (Array.isArray(e)) return e.map(j);
              },
            }
          );
        });
    },
    LkUo: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        i = n("2vv7"),
        o = n("Gz0x"),
        s = n("bwr2"),
        a = n("oL6p");
      function c(e, t) {
        return i(e, { extended: !0, globstar: !0 }).test(t);
      }
      function u() {
        for (
          var e = [],
            t = 0,
            n = monaco.languages.getLanguages().map(function (e) {
              return e.id;
            });
          t < n.length;
          t++
        ) {
          var r = n[t];
          -1 === e.indexOf(r) && e.push(r);
        }
        return e;
      }
      !(function (e) {
        (e.fromDocument = function (e) {
          return { uri: monaco.Uri.parse(e.uri), languageId: e.languageId };
        }),
          (e.fromModel = function (e) {
            return { uri: e.uri, languageId: e.getModeId() };
          });
      })((r = t.MonacoModelIdentifier || (t.MonacoModelIdentifier = {}))),
        (t.testGlob = c),
        (t.getLanguages = u);
      var d = (function () {
        function e(e, t) {
          (this.p2m = e), (this.m2p = t);
        }
        return (
          (e.prototype.match = function (e, t) {
            return this.matchModel(e, r.fromDocument(t));
          }),
          (e.prototype.createDiagnosticCollection = function (e) {
            return new s.MonacoDiagnosticCollection(e || "default", this.p2m);
          }),
          (e.prototype.registerCompletionItemProvider = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            for (
              var i = this.createCompletionProvider.apply(
                  this,
                  [e, t].concat(n)
                ),
                o = new a.DisposableCollection(),
                s = 0,
                c = u();
              s < c.length;
              s++
            ) {
              var d = c[s];
              this.matchLanguage(e, d) &&
                o.push(monaco.languages.registerCompletionItemProvider(d, i));
            }
            return o;
          }),
          (e.prototype.createCompletionProvider = function (e, t) {
            for (var n = this, i = [], o = 2; o < arguments.length; o++)
              i[o - 2] = arguments[o];
            return {
              triggerCharacters: i,
              provideCompletionItems: function (i, o, s, a) {
                if (!n.matchModel(e, r.fromModel(i))) return [];
                var c = n.m2p.asCompletionParams(i, o, a);
                return t.provideCompletionItems(c, s).then(function (e) {
                  return n.p2m.asCompletionResult(e);
                });
              },
              resolveCompletionItem: t.resolveCompletionItem
                ? function (e, r) {
                    var i = n.m2p.asCompletionItem(e);
                    return t.resolveCompletionItem(i, r).then(function (t) {
                      var r = n.p2m.asCompletionItem(t);
                      return Object.assign(e, r), e;
                    });
                  }
                : void 0,
            };
          }),
          (e.prototype.registerHoverProvider = function (e, t) {
            for (
              var n = this.createHoverProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerHoverProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createHoverProvider = function (e, t) {
            var n = this;
            return {
              provideHover: function (i, o, s) {
                if (n.matchModel(e, r.fromModel(i))) {
                  var a = n.m2p.asTextDocumentPositionParams(i, o);
                  return t.provideHover(a, s).then(function (e) {
                    return n.p2m.asHover(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerSignatureHelpProvider = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            for (
              var i = this.createSignatureHelpProvider.apply(
                  this,
                  [e, t].concat(n)
                ),
                o = new a.DisposableCollection(),
                s = 0,
                c = u();
              s < c.length;
              s++
            ) {
              var d = c[s];
              this.matchLanguage(e, d) &&
                o.push(monaco.languages.registerSignatureHelpProvider(d, i));
            }
            return o;
          }),
          (e.prototype.createSignatureHelpProvider = function (e, t) {
            for (var n = this, i = [], o = 2; o < arguments.length; o++)
              i[o - 2] = arguments[o];
            return {
              signatureHelpTriggerCharacters: i,
              provideSignatureHelp: function (i, o, s) {
                if (n.matchModel(e, r.fromModel(i))) {
                  var a = n.m2p.asTextDocumentPositionParams(i, o);
                  return t.provideSignatureHelp(a, s).then(function (e) {
                    return n.p2m.asSignatureHelp(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerDefinitionProvider = function (e, t) {
            for (
              var n = this.createDefinitionProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerDefinitionProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createDefinitionProvider = function (e, t) {
            var n = this;
            return {
              provideDefinition: function (i, o, s) {
                if (n.matchModel(e, r.fromModel(i))) {
                  var a = n.m2p.asTextDocumentPositionParams(i, o);
                  return t.provideDefinition(a, s).then(function (e) {
                    return n.p2m.asDefinitionResult(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerReferenceProvider = function (e, t) {
            for (
              var n = this.createReferenceProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerReferenceProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createReferenceProvider = function (e, t) {
            var n = this;
            return {
              provideReferences: function (i, o, s, a) {
                if (!n.matchModel(e, r.fromModel(i))) return [];
                var c = n.m2p.asReferenceParams(i, o, s);
                return t.provideReferences(c, a).then(function (e) {
                  return n.p2m.asReferences(e);
                });
              },
            };
          }),
          (e.prototype.registerDocumentHighlightProvider = function (e, t) {
            for (
              var n = this.createDocumentHighlightProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(
                  monaco.languages.registerDocumentHighlightProvider(s, n)
                );
            }
            return r;
          }),
          (e.prototype.createDocumentHighlightProvider = function (e, t) {
            var n = this;
            return {
              provideDocumentHighlights: function (i, o, s) {
                if (!n.matchModel(e, r.fromModel(i))) return [];
                var a = n.m2p.asTextDocumentPositionParams(i, o);
                return t.provideDocumentHighlights(a, s).then(function (e) {
                  return n.p2m.asDocumentHighlights(e);
                });
              },
            };
          }),
          (e.prototype.registerDocumentSymbolProvider = function (e, t) {
            for (
              var n = this.createDocumentSymbolProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerDocumentSymbolProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createDocumentSymbolProvider = function (e, t) {
            var n = this;
            return {
              provideDocumentSymbols: function (i, o) {
                if (!n.matchModel(e, r.fromModel(i))) return [];
                var s = n.m2p.asDocumentSymbolParams(i);
                return t.provideDocumentSymbols(s, o).then(function (e) {
                  return n.p2m.asDocumentSymbols(e);
                });
              },
            };
          }),
          (e.prototype.registerCodeActionsProvider = function (e, t) {
            for (
              var n = this.createCodeActionProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerCodeActionProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createCodeActionProvider = function (e, t) {
            var n = this;
            return {
              provideCodeActions: function (i, o, s, a) {
                if (!n.matchModel(e, r.fromModel(i))) return [];
                var c = n.m2p.asCodeActionParams(i, o, s);
                return t.provideCodeActions(c, a).then(function (e) {
                  return n.p2m.asCodeActions(e);
                });
              },
            };
          }),
          (e.prototype.registerCodeLensProvider = function (e, t) {
            for (
              var n = this.createCodeLensProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerCodeLensProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createCodeLensProvider = function (e, t) {
            var n = this;
            return {
              provideCodeLenses: function (i, o) {
                if (!n.matchModel(e, r.fromModel(i))) return [];
                var s = n.m2p.asCodeLensParams(i);
                return t.provideCodeLenses(s, o).then(function (e) {
                  return n.p2m.asCodeLenses(e);
                });
              },
              resolveCodeLens: t.resolveCodeLens
                ? function (i, o, s) {
                    if (!n.matchModel(e, r.fromModel(i))) return o;
                    var a = n.m2p.asCodeLens(o);
                    return t.resolveCodeLens(a, s).then(function (e) {
                      var t = n.p2m.asCodeLens(e);
                      return Object.assign(o, t), o;
                    });
                  }
                : function (e, t, n) {
                    return t;
                  },
            };
          }),
          (e.prototype.registerDocumentFormattingEditProvider = function (
            e,
            t
          ) {
            for (
              var n = this.createDocumentFormattingEditProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(
                  monaco.languages.registerDocumentFormattingEditProvider(s, n)
                );
            }
            return r;
          }),
          (e.prototype.createDocumentFormattingEditProvider = function (e, t) {
            var n = this;
            return {
              provideDocumentFormattingEdits: function (i, o, s) {
                if (!n.matchModel(e, r.fromModel(i))) return [];
                var a = n.m2p.asDocumentFormattingParams(i, o);
                return t
                  .provideDocumentFormattingEdits(a, s)
                  .then(function (e) {
                    return n.p2m.asTextEdits(e);
                  });
              },
            };
          }),
          (e.prototype.registerDocumentRangeFormattingEditProvider = function (
            e,
            t
          ) {
            for (
              var n = this.createDocumentRangeFormattingEditProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(
                  monaco.languages.registerDocumentRangeFormattingEditProvider(
                    s,
                    n
                  )
                );
            }
            return r;
          }),
          (e.prototype.createDocumentRangeFormattingEditProvider = function (
            e,
            t
          ) {
            var n = this;
            return {
              provideDocumentRangeFormattingEdits: function (i, o, s, a) {
                if (!n.matchModel(e, r.fromModel(i))) return [];
                var c = n.m2p.asDocumentRangeFormattingParams(i, o, s);
                return t
                  .provideDocumentRangeFormattingEdits(c, a)
                  .then(function (e) {
                    return n.p2m.asTextEdits(e);
                  });
              },
            };
          }),
          (e.prototype.registerOnTypeFormattingEditProvider = function (
            e,
            t,
            n
          ) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            for (
              var o = this.createOnTypeFormattingEditProvider.apply(
                  this,
                  [e, t, n].concat(r)
                ),
                s = new a.DisposableCollection(),
                c = 0,
                d = u();
              c < d.length;
              c++
            ) {
              var l = d[c];
              this.matchLanguage(e, l) &&
                s.push(
                  monaco.languages.registerOnTypeFormattingEditProvider(l, o)
                );
            }
            return s;
          }),
          (e.prototype.createOnTypeFormattingEditProvider = function (e, t, n) {
            for (var i = this, o = [], s = 3; s < arguments.length; s++)
              o[s - 3] = arguments[s];
            var a = [n].concat(o);
            return {
              autoFormatTriggerCharacters: a,
              provideOnTypeFormattingEdits: function (n, o, s, a, c) {
                if (!i.matchModel(e, r.fromModel(n))) return [];
                var u = i.m2p.asDocumentOnTypeFormattingParams(n, o, s, a);
                return t.provideOnTypeFormattingEdits(u, c).then(function (e) {
                  return i.p2m.asTextEdits(e);
                });
              },
            };
          }),
          (e.prototype.registerRenameProvider = function (e, t) {
            for (
              var n = this.createRenameProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerRenameProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createRenameProvider = function (e, t) {
            var n = this;
            return {
              provideRenameEdits: function (i, o, s, a) {
                if (n.matchModel(e, r.fromModel(i))) {
                  var c = n.m2p.asRenameParams(i, o, s);
                  return t.provideRenameEdits(c, a).then(function (e) {
                    return n.p2m.asWorkspaceEdit(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerDocumentLinkProvider = function (e, t) {
            for (
              var n = this.createDocumentLinkProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerLinkProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createDocumentLinkProvider = function (e, t) {
            var n = this;
            return {
              provideLinks: function (i, o) {
                if (n.matchModel(e, r.fromModel(i))) {
                  var s = n.m2p.asDocumentLinkParams(i);
                  return t.provideDocumentLinks(s, o).then(function (e) {
                    return n.p2m.asDocumentLinks(e);
                  });
                }
              },
              resolveLink: function (e, r) {
                if (
                  t.resolveDocumentLink &&
                  (null === e.url || void 0 === e.url)
                ) {
                  var i = n.m2p.asDocumentLink(e);
                  return t.resolveDocumentLink(i, r).then(function (t) {
                    var r = n.p2m.asDocumentLink(t);
                    return Object.assign(e, r), e;
                  });
                }
                return e;
              },
            };
          }),
          (e.prototype.registerImplementationProvider = function (e, t) {
            for (
              var n = this.createImplementationProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerImplementationProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createImplementationProvider = function (e, t) {
            var n = this;
            return {
              provideImplementation: function (i, o, s) {
                if (n.matchModel(e, r.fromModel(i))) {
                  var a = n.m2p.asTextDocumentPositionParams(i, o);
                  return t.provideImplementation(a, s).then(function (e) {
                    return n.p2m.asDefinitionResult(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerTypeDefinitionProvider = function (e, t) {
            for (
              var n = this.createTypeDefinitionProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerTypeDefinitionProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createTypeDefinitionProvider = function (e, t) {
            var n = this;
            return {
              provideTypeDefinition: function (i, o, s) {
                if (n.matchModel(e, r.fromModel(i))) {
                  var a = n.m2p.asTextDocumentPositionParams(i, o);
                  return t.provideTypeDefinition(a, s).then(function (e) {
                    return n.p2m.asDefinitionResult(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerColorProvider = function (e, t) {
            for (
              var n = this.createDocumentColorProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerColorProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createDocumentColorProvider = function (e, t) {
            var n = this;
            return {
              provideDocumentColors: function (i, o) {
                if (!n.matchModel(e, r.fromModel(i))) return [];
                var s = n.m2p.asTextDocumentIdentifier(i);
                return t
                  .provideDocumentColors({ textDocument: s }, o)
                  .then(function (e) {
                    return n.p2m.asColorInformations(e);
                  });
              },
              provideColorPresentations: function (i, o, s) {
                if (!n.matchModel(e, r.fromModel(i))) return [];
                var a = n.m2p.asTextDocumentIdentifier(i),
                  c = n.m2p.asRange(o.range);
                return t
                  .provideColorPresentations(
                    { textDocument: a, color: o.color, range: c },
                    s
                  )
                  .then(function (e) {
                    return n.p2m.asColorPresentations(e);
                  });
              },
            };
          }),
          (e.prototype.registerFoldingRangeProvider = function (e, t) {
            for (
              var n = this.createFoldingRangeProvider(e, t),
                r = new a.DisposableCollection(),
                i = 0,
                o = u();
              i < o.length;
              i++
            ) {
              var s = o[i];
              this.matchLanguage(e, s) &&
                r.push(monaco.languages.registerFoldingRangeProvider(s, n));
            }
            return r;
          }),
          (e.prototype.createFoldingRangeProvider = function (e, t) {
            var n = this;
            return {
              provideFoldingRanges: function (i, o, s) {
                if (!n.matchModel(e, r.fromModel(i))) return [];
                var a = n.m2p.asTextDocumentIdentifier(i);
                return t
                  .provideFoldingRanges({ textDocument: a }, s)
                  .then(function (e) {
                    return n.p2m.asFoldingRanges(e);
                  });
              },
            };
          }),
          (e.prototype.matchModel = function (e, t) {
            var n = this;
            return Array.isArray(e)
              ? e.some(function (e) {
                  return n.matchModel(e, t);
                })
              : o.DocumentFilter.is(e)
              ? (!e.language || e.language === t.languageId) &&
                (!e.scheme || e.scheme === t.uri.scheme) &&
                !(e.pattern && !c(e.pattern, t.uri.path))
              : e === t.languageId;
          }),
          (e.prototype.matchLanguage = function (e, t) {
            var n = this;
            return Array.isArray(e)
              ? e.some(function (e) {
                  return n.matchLanguage(e, t);
                })
              : o.DocumentFilter.is(e)
              ? !e.language || e.language === t
              : e === t;
          }),
          e
        );
      })();
      t.MonacoLanguages = d;
    },
    MOv1: function (e, t, n) {
      "use strict";
      (function (e) {
        function r(e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = n("Gkij"),
          o = n("f7Fo");
        (t.RequestType = o.RequestType),
          (t.RequestType0 = o.RequestType0),
          (t.RequestType1 = o.RequestType1),
          (t.RequestType2 = o.RequestType2),
          (t.RequestType3 = o.RequestType3),
          (t.RequestType4 = o.RequestType4),
          (t.RequestType5 = o.RequestType5),
          (t.RequestType6 = o.RequestType6),
          (t.RequestType7 = o.RequestType7),
          (t.RequestType8 = o.RequestType8),
          (t.RequestType9 = o.RequestType9),
          (t.ResponseError = o.ResponseError),
          (t.ErrorCodes = o.ErrorCodes),
          (t.NotificationType = o.NotificationType),
          (t.NotificationType0 = o.NotificationType0),
          (t.NotificationType1 = o.NotificationType1),
          (t.NotificationType2 = o.NotificationType2),
          (t.NotificationType3 = o.NotificationType3),
          (t.NotificationType4 = o.NotificationType4),
          (t.NotificationType5 = o.NotificationType5),
          (t.NotificationType6 = o.NotificationType6),
          (t.NotificationType7 = o.NotificationType7),
          (t.NotificationType8 = o.NotificationType8),
          (t.NotificationType9 = o.NotificationType9);
        const s = n("K4MX");
        (t.MessageReader = s.MessageReader),
          (t.StreamMessageReader = s.StreamMessageReader),
          (t.IPCMessageReader = s.IPCMessageReader),
          (t.SocketMessageReader = s.SocketMessageReader);
        const a = n("k5Vz");
        (t.MessageWriter = a.MessageWriter),
          (t.StreamMessageWriter = a.StreamMessageWriter),
          (t.IPCMessageWriter = a.IPCMessageWriter),
          (t.SocketMessageWriter = a.SocketMessageWriter);
        const c = n("fIkx");
        (t.Disposable = c.Disposable),
          (t.Event = c.Event),
          (t.Emitter = c.Emitter);
        const u = n("BA4U");
        (t.CancellationTokenSource = u.CancellationTokenSource),
          (t.CancellationToken = u.CancellationToken);
        const d = n("wSv1");
        var l, p, f, m, g, h, v;
        r(n("I0O9")),
          r(n("uUC1")),
          (function (e) {
            e.type = new o.NotificationType("$/cancelRequest");
          })(l || (l = {})),
          (t.NullLogger = Object.freeze({
            error: () => {},
            warn: () => {},
            info: () => {},
            log: () => {},
          })),
          (function (e) {
            (e[(e.Off = 0)] = "Off"),
              (e[(e.Messages = 1)] = "Messages"),
              (e[(e.Verbose = 2)] = "Verbose");
          })((p = t.Trace || (t.Trace = {}))),
          (function (e) {
            (e.fromString = function (t) {
              switch ((t = t.toLowerCase())) {
                case "off":
                  return e.Off;
                case "messages":
                  return e.Messages;
                case "verbose":
                  return e.Verbose;
                default:
                  return e.Off;
              }
            }),
              (e.toString = function (t) {
                switch (t) {
                  case e.Off:
                    return "off";
                  case e.Messages:
                    return "messages";
                  case e.Verbose:
                    return "verbose";
                  default:
                    return "off";
                }
              });
          })((p = t.Trace || (t.Trace = {}))),
          (function (e) {
            (e.Text = "text"), (e.JSON = "json");
          })(t.TraceFormat || (t.TraceFormat = {})),
          (function (e) {
            e.fromString = function (t) {
              return "json" === (t = t.toLowerCase()) ? e.JSON : e.Text;
            };
          })((f = t.TraceFormat || (t.TraceFormat = {}))),
          (function (e) {
            e.type = new o.NotificationType("$/setTraceNotification");
          })((m = t.SetTraceNotification || (t.SetTraceNotification = {}))),
          (function (e) {
            e.type = new o.NotificationType("$/logTraceNotification");
          })((g = t.LogTraceNotification || (t.LogTraceNotification = {}))),
          (function (e) {
            (e[(e.Closed = 1)] = "Closed"),
              (e[(e.Disposed = 2)] = "Disposed"),
              (e[(e.AlreadyListening = 3)] = "AlreadyListening");
          })((h = t.ConnectionErrors || (t.ConnectionErrors = {})));
        class y extends Error {
          constructor(e, t) {
            super(t), (this.code = e), Object.setPrototypeOf(this, y.prototype);
          }
        }
        function C(t, n, r, s) {
          let a = 0,
            C = 0,
            D = 0;
          const w = "2.0";
          let x,
            b,
            _,
            R,
            T = Object.create(null),
            P = Object.create(null),
            S = new d.LinkedMap(),
            k = Object.create(null),
            E = Object.create(null),
            O = p.Off,
            M = f.Text,
            F = v.New,
            q = new c.Emitter(),
            I = new c.Emitter(),
            N = new c.Emitter(),
            L = new c.Emitter();
          function K(e) {
            return "req-" + e.toString();
          }
          function j(e, t) {
            var n;
            o.isRequestMessage(t)
              ? e.set(K(t.id), t)
              : o.isResponseMessage(t)
              ? e.set(
                  null === (n = t.id)
                    ? "res-unknown-" + (++D).toString()
                    : "res-" + n.toString(),
                  t
                )
              : e.set("not-" + (++C).toString(), t);
          }
          function A(e) {}
          function W() {
            return F === v.Listening;
          }
          function H() {
            return F === v.Closed;
          }
          function U() {
            return F === v.Disposed;
          }
          function z() {
            (F !== v.New && F !== v.Listening) ||
              ((F = v.Closed), I.fire(void 0));
          }
          function $() {
            _ ||
              0 === S.size ||
              (_ = e(() => {
                (_ = void 0),
                  (function () {
                    if (0 === S.size) return;
                    let e = S.shift();
                    try {
                      o.isRequestMessage(e)
                        ? (function (e) {
                            if (U()) return;
                            function t(t, r, i) {
                              let s = { jsonrpc: w, id: e.id };
                              t instanceof o.ResponseError
                                ? (s.error = t.toJson())
                                : (s.result = void 0 === t ? null : t),
                                V(s, r, i),
                                n.write(s);
                            }
                            function r(t, r, i) {
                              let o = {
                                jsonrpc: w,
                                id: e.id,
                                error: t.toJson(),
                              };
                              V(o, r, i), n.write(o);
                            }
                            function s(t, r, i) {
                              void 0 === t && (t = null);
                              let o = { jsonrpc: w, id: e.id, result: t };
                              V(o, r, i), n.write(o);
                            }
                            !(function (e) {
                              if (O === p.Off || !R) return;
                              if (M === f.Text) {
                                let t;
                                O === p.Verbose &&
                                  e.params &&
                                  (t = `Params: ${JSON.stringify(
                                    e.params,
                                    null,
                                    4
                                  )}\n\n`),
                                  R.log(
                                    `Received request '${e.method} - (${e.id})'.`,
                                    t
                                  );
                              } else B("receive-request", e);
                            })(e);
                            let a,
                              c,
                              d = T[e.method];
                            d && ((a = d.type), (c = d.handler));
                            let l = Date.now();
                            if (c || x) {
                              let n = new u.CancellationTokenSource(),
                                d = String(e.id);
                              E[d] = n;
                              try {
                                let u;
                                u =
                                  void 0 === e.params ||
                                  (void 0 !== a && 0 === a.numberOfParams)
                                    ? c
                                      ? c(n.token)
                                      : x(e.method, n.token)
                                    : i.array(e.params) &&
                                      (void 0 === a || a.numberOfParams > 1)
                                    ? c
                                      ? c(...e.params, n.token)
                                      : x(e.method, ...e.params, n.token)
                                    : c
                                    ? c(e.params, n.token)
                                    : x(e.method, e.params, n.token);
                                let p = u;
                                u
                                  ? p.then
                                    ? p.then(
                                        (n) => {
                                          delete E[d], t(n, e.method, l);
                                        },
                                        (t) => {
                                          delete E[d],
                                            t instanceof o.ResponseError
                                              ? r(t, e.method, l)
                                              : t && i.string(t.message)
                                              ? r(
                                                  new o.ResponseError(
                                                    o.ErrorCodes.InternalError,
                                                    `Request ${e.method} failed with message: ${t.message}`
                                                  ),
                                                  e.method,
                                                  l
                                                )
                                              : r(
                                                  new o.ResponseError(
                                                    o.ErrorCodes.InternalError,
                                                    `Request ${e.method} failed unexpectedly without providing any details.`
                                                  ),
                                                  e.method,
                                                  l
                                                );
                                        }
                                      )
                                    : (delete E[d], t(u, e.method, l))
                                  : (delete E[d], s(u, e.method, l));
                              } catch (m) {
                                delete E[d],
                                  m instanceof o.ResponseError
                                    ? t(m, e.method, l)
                                    : m && i.string(m.message)
                                    ? r(
                                        new o.ResponseError(
                                          o.ErrorCodes.InternalError,
                                          `Request ${e.method} failed with message: ${m.message}`
                                        ),
                                        e.method,
                                        l
                                      )
                                    : r(
                                        new o.ResponseError(
                                          o.ErrorCodes.InternalError,
                                          `Request ${e.method} failed unexpectedly without providing any details.`
                                        ),
                                        e.method,
                                        l
                                      );
                              }
                            } else
                              r(
                                new o.ResponseError(
                                  o.ErrorCodes.MethodNotFound,
                                  `Unhandled method ${e.method}`
                                ),
                                e.method,
                                l
                              );
                          })(e)
                        : o.isNotificationMessage(e)
                        ? (function (e) {
                            if (U()) return;
                            let t, n;
                            if (e.method === l.type.method)
                              n = (e) => {
                                let t = e.id,
                                  n = E[String(t)];
                                n && n.cancel();
                              };
                            else {
                              let r = P[e.method];
                              r && ((n = r.handler), (t = r.type));
                            }
                            if (n || b)
                              try {
                                !(function (e) {
                                  if (
                                    O === p.Off ||
                                    !R ||
                                    e.method === g.type.method
                                  )
                                    return;
                                  if (M === f.Text) {
                                    let t;
                                    O === p.Verbose &&
                                      (t = e.params
                                        ? `Params: ${JSON.stringify(
                                            e.params,
                                            null,
                                            4
                                          )}\n\n`
                                        : "No parameters provided.\n\n"),
                                      R.log(
                                        `Received notification '${e.method}'.`,
                                        t
                                      );
                                  } else B("receive-notification", e);
                                })(e),
                                  void 0 === e.params ||
                                  (void 0 !== t && 0 === t.numberOfParams)
                                    ? n
                                      ? n()
                                      : b(e.method)
                                    : i.array(e.params) &&
                                      (void 0 === t || t.numberOfParams > 1)
                                    ? n
                                      ? n(...e.params)
                                      : b(e.method, ...e.params)
                                    : n
                                    ? n(e.params)
                                    : b(e.method, e.params);
                              } catch (o) {
                                o.message
                                  ? r.error(
                                      `Notification handler '${e.method}' failed with message: ${o.message}`
                                    )
                                  : r.error(
                                      `Notification handler '${e.method}' failed unexpectedly.`
                                    );
                              }
                            else N.fire(e);
                          })(e)
                        : o.isResponseMessage(e)
                        ? (function (e) {
                            if (U()) return;
                            if (null === e.id)
                              e.error
                                ? r.error(
                                    `Received response message without id: Error is: \n${JSON.stringify(
                                      e.error,
                                      void 0,
                                      4
                                    )}`
                                  )
                                : r.error(
                                    "Received response message without id. No further error information provided."
                                  );
                            else {
                              let n = String(e.id),
                                i = k[n];
                              if (
                                ((function (e, t) {
                                  if (O === p.Off || !R) return;
                                  if (M === f.Text) {
                                    let n;
                                    if (
                                      (O === p.Verbose &&
                                        (e.error && e.error.data
                                          ? (n = `Error data: ${JSON.stringify(
                                              e.error.data,
                                              null,
                                              4
                                            )}\n\n`)
                                          : e.result
                                          ? (n = `Result: ${JSON.stringify(
                                              e.result,
                                              null,
                                              4
                                            )}\n\n`)
                                          : void 0 === e.error &&
                                            (n = "No result returned.\n\n")),
                                      t)
                                    ) {
                                      let r = e.error
                                        ? ` Request failed: ${e.error.message} (${e.error.code}).`
                                        : "";
                                      R.log(
                                        `Received response '${t.method} - (${
                                          e.id
                                        })' in ${
                                          Date.now() - t.timerStart
                                        }ms.${r}`,
                                        n
                                      );
                                    } else
                                      R.log(
                                        `Received response ${e.id} without active response promise.`,
                                        n
                                      );
                                  } else B("receive-response", e);
                                })(e, i),
                                i)
                              ) {
                                delete k[n];
                                try {
                                  if (e.error) {
                                    let t = e.error;
                                    i.reject(
                                      new o.ResponseError(
                                        t.code,
                                        t.message,
                                        t.data
                                      )
                                    );
                                  } else {
                                    if (void 0 === e.result)
                                      throw new Error("Should never happen.");
                                    i.resolve(e.result);
                                  }
                                } catch (t) {
                                  t.message
                                    ? r.error(
                                        `Response handler '${i.method}' failed with message: ${t.message}`
                                      )
                                    : r.error(
                                        `Response handler '${i.method}' failed unexpectedly.`
                                      );
                                }
                              }
                            }
                          })(e)
                        : (function (e) {
                            if (!e)
                              return void r.error("Received empty message.");
                            r.error(
                              `Received message which is neither a response nor a notification message:\n${JSON.stringify(
                                e,
                                null,
                                4
                              )}`
                            );
                            let t = e;
                            if (i.string(t.id) || i.number(t.id)) {
                              let e = String(t.id),
                                n = k[e];
                              n &&
                                n.reject(
                                  new Error(
                                    "The received response has neither a result nor an error property."
                                  )
                                );
                            }
                          })(e);
                    } finally {
                      $();
                    }
                  })();
              }));
          }
          t.onClose(z),
            t.onError(function (e) {
              q.fire([e, void 0, void 0]);
            }),
            n.onClose(z),
            n.onError(function (e) {
              q.fire(e);
            });
          let J = (e) => {
            try {
              if (o.isNotificationMessage(e) && e.method === l.type.method) {
                let t = K(e.params.id),
                  r = S.get(t);
                if (o.isRequestMessage(r)) {
                  let i =
                    s && s.cancelUndispatched
                      ? s.cancelUndispatched(r, A)
                      : void 0;
                  if (i && (void 0 !== i.error || void 0 !== i.result))
                    return (
                      S.delete(t),
                      (i.id = r.id),
                      V(i, e.method, Date.now()),
                      void n.write(i)
                    );
                }
              }
              j(S, e);
            } finally {
              $();
            }
          };
          function V(e, t, n) {
            if (O !== p.Off && R)
              if (M === f.Text) {
                let r;
                O === p.Verbose &&
                  (e.error && e.error.data
                    ? (r = `Error data: ${JSON.stringify(
                        e.error.data,
                        null,
                        4
                      )}\n\n`)
                    : e.result
                    ? (r = `Result: ${JSON.stringify(e.result, null, 4)}\n\n`)
                    : void 0 === e.error && (r = "No result returned.\n\n")),
                  R.log(
                    `Sending response '${t} - (${
                      e.id
                    })'. Processing request took ${Date.now() - n}ms`,
                    r
                  );
              } else B("send-response", e);
          }
          function B(e, t) {
            if (!R || O === p.Off) return;
            const n = {
              isLSPMessage: !0,
              type: e,
              message: t,
              timestamp: Date.now(),
            };
            R.log(n);
          }
          function G() {
            if (H()) throw new y(h.Closed, "Connection is closed.");
            if (U()) throw new y(h.Disposed, "Connection is disposed.");
          }
          function Z(e) {
            return void 0 === e ? null : e;
          }
          function Q(e, t) {
            let n,
              r = e.numberOfParams;
            switch (r) {
              case 0:
                n = null;
                break;
              case 1:
                n = Z(t[0]);
                break;
              default:
                n = [];
                for (let e = 0; e < t.length && e < r; e++) n.push(Z(t[e]));
                if (t.length < r)
                  for (let e = t.length; e < r; e++) n.push(null);
            }
            return n;
          }
          let X = {
            sendNotification: (e, ...t) => {
              let r, o;
              if ((G(), i.string(e)))
                switch (((r = e), t.length)) {
                  case 0:
                    o = null;
                    break;
                  case 1:
                    o = t[0];
                    break;
                  default:
                    o = t;
                }
              else (r = e.method), (o = Q(e, t));
              let s = { jsonrpc: w, method: r, params: o };
              !(function (e) {
                if (O !== p.Off && R)
                  if (M === f.Text) {
                    let t;
                    O === p.Verbose &&
                      (t = e.params
                        ? `Params: ${JSON.stringify(e.params, null, 4)}\n\n`
                        : "No parameters provided.\n\n"),
                      R.log(`Sending notification '${e.method}'.`, t);
                  } else B("send-notification", e);
              })(s),
                n.write(s);
            },
            onNotification: (e, t) => {
              G(),
                i.func(e)
                  ? (b = e)
                  : t &&
                    (i.string(e)
                      ? (P[e] = { type: void 0, handler: t })
                      : (P[e.method] = { type: e, handler: t }));
            },
            sendRequest: (e, ...t) => {
              let r, s, c;
              if (
                (G(),
                (function () {
                  if (!W()) throw new Error("Call listen() first.");
                })(),
                i.string(e))
              )
                switch (((r = e), t.length)) {
                  case 0:
                    s = null;
                    break;
                  case 1:
                    u.CancellationToken.is(t[0])
                      ? ((s = null), (c = t[0]))
                      : (s = Z(t[0]));
                    break;
                  default:
                    const e = t.length - 1;
                    u.CancellationToken.is(t[e])
                      ? ((c = t[e]),
                        (s =
                          2 === t.length
                            ? Z(t[0])
                            : t.slice(0, e).map((e) => Z(e))))
                      : (s = t.map((e) => Z(e)));
                }
              else {
                (r = e.method), (s = Q(e, t));
                let n = e.numberOfParams;
                c = u.CancellationToken.is(t[n]) ? t[n] : void 0;
              }
              let d = a++,
                m = new Promise((e, t) => {
                  let i = { jsonrpc: w, id: d, method: r, params: s },
                    a = {
                      method: r,
                      timerStart: Date.now(),
                      resolve: e,
                      reject: t,
                    };
                  !(function (e) {
                    if (O !== p.Off && R)
                      if (M === f.Text) {
                        let t;
                        O === p.Verbose &&
                          e.params &&
                          (t = `Params: ${JSON.stringify(
                            e.params,
                            null,
                            4
                          )}\n\n`),
                          R.log(
                            `Sending request '${e.method} - (${e.id})'.`,
                            t
                          );
                      } else B("send-request", e);
                  })(i);
                  try {
                    n.write(i);
                  } catch (c) {
                    a.reject(
                      new o.ResponseError(
                        o.ErrorCodes.MessageWriteError,
                        c.message ? c.message : "Unknown reason"
                      )
                    ),
                      (a = null);
                  }
                  a && (k[String(d)] = a);
                });
              return (
                c &&
                  c.onCancellationRequested(() => {
                    X.sendNotification(l.type, { id: d });
                  }),
                m
              );
            },
            onRequest: (e, t) => {
              G(),
                i.func(e)
                  ? (x = e)
                  : t &&
                    (i.string(e)
                      ? (T[e] = { type: void 0, handler: t })
                      : (T[e.method] = { type: e, handler: t }));
            },
            trace: (e, t, n) => {
              let r = !1,
                o = f.Text;
              void 0 !== n &&
                (i.boolean(n)
                  ? (r = n)
                  : ((r = n.sendNotification || !1),
                    (o = n.traceFormat || f.Text))),
                (O = e),
                (M = o),
                (R = O === p.Off ? void 0 : t),
                !r ||
                  H() ||
                  U() ||
                  X.sendNotification(m.type, { value: p.toString(e) });
            },
            onError: q.event,
            onClose: I.event,
            onUnhandledNotification: N.event,
            onDispose: L.event,
            dispose: () => {
              if (U()) return;
              (F = v.Disposed), L.fire(void 0);
              let e = new Error("Connection got disposed.");
              Object.keys(k).forEach((t) => {
                k[t].reject(e);
              }),
                (k = Object.create(null)),
                (E = Object.create(null)),
                (S = new d.LinkedMap()),
                i.func(n.dispose) && n.dispose(),
                i.func(t.dispose) && t.dispose();
            },
            listen: () => {
              G(),
                (function () {
                  if (W())
                    throw new y(
                      h.AlreadyListening,
                      "Connection is already listening"
                    );
                })(),
                (F = v.Listening),
                t.listen(J);
            },
            inspect: () => {
              console.log("inspect");
            },
          };
          return (
            X.onNotification(g.type, (e) => {
              O !== p.Off &&
                R &&
                R.log(e.message, O === p.Verbose ? e.verbose : void 0);
            }),
            X
          );
        }
        (t.ConnectionError = y),
          (function (e) {
            e.is = function (e) {
              let t = e;
              return t && i.func(t.cancelUndispatched);
            };
          })(t.ConnectionStrategy || (t.ConnectionStrategy = {})),
          (function (e) {
            (e[(e.New = 1)] = "New"),
              (e[(e.Listening = 2)] = "Listening"),
              (e[(e.Closed = 3)] = "Closed"),
              (e[(e.Disposed = 4)] = "Disposed");
          })(v || (v = {})),
          (t.createMessageConnection = function (e, n, r, i) {
            var o;
            return (
              r || (r = t.NullLogger),
              C(
                void 0 !== (o = e).listen && void 0 === o.read
                  ? e
                  : new s.StreamMessageReader(e),
                (function (e) {
                  return void 0 !== e.write && void 0 === e.end;
                })(n)
                  ? n
                  : new a.StreamMessageWriter(n),
                r,
                i
              )
            );
          });
      }.call(this, n("CfyG").setImmediate));
    },
    QGVK: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return r(t, e), t;
      })(n("uoVZ").CompletionItem);
      t.default = i;
    },
    "U+XB": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
        function e(e) {
          this.editor = e;
        }
        return (
          (e.prototype.registerCommand = function (e, t, n) {
            return this.editor._commandService.addCommand({
              id: e,
              handler: function (e) {
                for (var n = [], r = 1; r < arguments.length; r++)
                  n[r - 1] = arguments[r];
                return t.apply(void 0, n);
              },
            });
          }),
          e
        );
      })();
      t.MonacoCommands = r;
    },
    U5rG: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n("qRuN"),
        o = n("uSJ4"),
        s = n("Chfy"),
        a = n("orFP"),
        c = n("Wo+m"),
        u = n("WULY");
      !(function (e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      })(n("qRuN"));
      var d = (function (e) {
        function t(n) {
          var r = n.id,
            i = n.name,
            o = n.clientOptions,
            s = n.connectionProvider,
            a = e.call(this, r || i.toLowerCase(), i, o) || this;
          (a.connectionProvider = s),
            (a.createConnection = a.doCreateConnection.bind(a));
          var c = a;
          return (
            (c._p2c = new Proxy(c._p2c, {
              get: function (e, n) {
                return "asUri" === n ? e[n] : t.bypassConversion;
              },
            })),
            (c._c2p = new Proxy(c._c2p, {
              get: function (e, n) {
                return "asUri" === n
                  ? e[n]
                  : "asCompletionParams" === n
                  ? function (t, n, r) {
                      return {
                        textDocument: e.asTextDocumentIdentifier(t),
                        position: n,
                        context: r,
                      };
                    }
                  : "asWillSaveTextDocumentParams" === n
                  ? function (t) {
                      return {
                        textDocument: e.asTextDocumentIdentifier(t.document),
                        reason: t.reason,
                      };
                    }
                  : n.endsWith("Params")
                  ? e[n]
                  : t.bypassConversion;
              },
            })),
            a
          );
        }
        return (
          r(t, e),
          (t.prototype.doCreateConnection = function () {
            var e = this.handleConnectionError.bind(this),
              t = this.handleConnectionClosed.bind(this);
            return this.connectionProvider.get(e, t, this.outputChannel);
          }),
          (t.prototype.createMessageTransports = function (e) {
            throw new Error("Unsupported");
          }),
          (t.prototype.registerBuiltinFeatures = function () {
            e.prototype.registerBuiltinFeatures.call(this),
              this.registerFeature(new o.TypeDefinitionFeature(this)),
              this.registerFeature(new s.ImplementationFeature(this)),
              this.registerFeature(new a.ColorProviderFeature(this)),
              this.registerFeature(new c.WorkspaceFoldersFeature(this));
            var n = new u.FoldingRangeFeature(this);
            (n.asFoldingRanges = t.bypassConversion), this.registerFeature(n);
          }),
          (t.bypassConversion = function (e) {
            return e || void 0;
          }),
          t
        );
      })(i.BaseLanguageClient);
      t.MonacoLanguageClient = d;
    },
    VqZt: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("MOv1");
      !(function (e) {
        e.type = new r.RequestType0("workspace/workspaceFolders");
      })(t.WorkspaceFoldersRequest || (t.WorkspaceFoldersRequest = {})),
        (function (e) {
          e.type = new r.NotificationType(
            "workspace/didChangeWorkspaceFolders"
          );
        })(
          t.DidChangeWorkspaceFoldersNotification ||
            (t.DidChangeWorkspaceFoldersNotification = {})
        );
    },
    WULY: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n("AL8H"),
        o = n("hC2b"),
        s = n("uoVZ"),
        a = n("BOov");
      function c(e, t) {
        return void 0 === e[t] && (e[t] = {}), e[t];
      }
      var u = (function (e) {
        function t(t) {
          return e.call(this, t, a.FoldingRangeRequest.type) || this;
        }
        return (
          r(t, e),
          (t.prototype.fillClientCapabilities = function (e) {
            var t = c(c(e, "textDocument"), "foldingRange");
            (t.dynamicRegistration = !0),
              (t.rangeLimit = 5e3),
              (t.lineFoldingOnly = !0);
          }),
          (t.prototype.initialize = function (e, t) {
            if (e.foldingRangeProvider) {
              var n = e.foldingRangeProvider,
                r = o.string(n.id) && n.id.length > 0 ? n.id : i.generateUuid(),
                s = n.documentSelector || t;
              s &&
                this.register(this.messages, {
                  id: r,
                  registerOptions: Object.assign({}, { documentSelector: s }),
                });
            }
          }),
          (t.prototype.registerLanguageProvider = function (e) {
            var t = this,
              n = this._client,
              r = function (e, r, i) {
                var o = {
                  textDocument:
                    n.code2ProtocolConverter.asTextDocumentIdentifier(e),
                };
                return n
                  .sendRequest(a.FoldingRangeRequest.type, o, i)
                  .then(t.asFoldingRanges.bind(t), function (e) {
                    return (
                      n.logFailedRequest(a.FoldingRangeRequest.type, e),
                      Promise.resolve(null)
                    );
                  });
              },
              i = n.clientOptions.middleware;
            return s.languages.registerFoldingRangeProvider(
              e.documentSelector,
              {
                provideFoldingRanges: function (e, t, n) {
                  return i.provideFoldingRanges
                    ? i.provideFoldingRanges(e, t, n, r)
                    : r(e, 0, n);
                },
              }
            );
          }),
          (t.prototype.asFoldingRangeKind = function (e) {
            if (e)
              switch (e) {
                case a.FoldingRangeKind.Comment:
                  return s.FoldingRangeKind.Comment;
                case a.FoldingRangeKind.Imports:
                  return s.FoldingRangeKind.Imports;
                case a.FoldingRangeKind.Region:
                  return s.FoldingRangeKind.Region;
              }
          }),
          (t.prototype.asFoldingRanges = function (e) {
            var t = this;
            return Array.isArray(e)
              ? e.map(function (e) {
                  return new s.FoldingRange(
                    e.startLine,
                    e.endLine,
                    t.asFoldingRangeKind(e.kind)
                  );
                })
              : [];
          }),
          t
        );
      })(n("qRuN").TextDocumentFeature);
      t.FoldingRangeFeature = u;
    },
    "Wo+m": function (e, t, n) {
      "use strict";
      var r =
        (this && this.__values) ||
        function (e) {
          var t = "function" === typeof Symbol && e[Symbol.iterator],
            n = 0;
          return t
            ? t.call(e)
            : {
                next: function () {
                  return (
                    e && n >= e.length && (e = void 0),
                    { value: e && e[n++], done: !e }
                  );
                },
              };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n("AL8H"),
        o = n("uoVZ"),
        s = n("BOov");
      function a(e, t) {
        if (void 0 !== e) return e[t];
      }
      var c = (function () {
        function e(e) {
          (this._client = e), (this._listeners = new Map());
        }
        return (
          Object.defineProperty(e.prototype, "messages", {
            get: function () {
              return s.DidChangeWorkspaceFoldersNotification.type;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.fillInitializeParams = function (e) {
            var t = this,
              n = o.workspace.workspaceFolders;
            e.workspaceFolders =
              void 0 === n
                ? null
                : n.map(function (e) {
                    return t.asProtocol(e);
                  });
          }),
          (e.prototype.fillClientCapabilities = function (e) {
            (e.workspace = e.workspace || {}),
              (e.workspace.workspaceFolders = !0);
          }),
          (e.prototype.initialize = function (e) {
            var t = this,
              n = this._client;
            n.onRequest(s.WorkspaceFoldersRequest.type, function (e) {
              var r = function () {
                  var e = o.workspace.workspaceFolders;
                  return void 0 === e
                    ? null
                    : e.map(function (e) {
                        return t.asProtocol(e);
                      });
                },
                i = n.clientOptions.middleware.workspace;
              return i && i.workspaceFolders ? i.workspaceFolders(e, r) : r();
            });
            var r,
              c = a(
                a(a(e, "workspace"), "workspaceFolders"),
                "changeNotifications"
              );
            "string" === typeof c
              ? (r = c)
              : !0 === c && (r = i.generateUuid()),
              r &&
                this.register(this.messages, {
                  id: r,
                  registerOptions: void 0,
                });
          }),
          (e.prototype.register = function (e, t) {
            var n = this,
              r = t.id,
              i = this._client,
              a = o.workspace.onDidChangeWorkspaceFolders(function (e) {
                var t = function (e) {
                    var t = {
                      event: {
                        added: e.added.map(function (e) {
                          return n.asProtocol(e);
                        }),
                        removed: e.removed.map(function (e) {
                          return n.asProtocol(e);
                        }),
                      },
                    };
                    n._client.sendNotification(
                      s.DidChangeWorkspaceFoldersNotification.type,
                      t
                    );
                  },
                  r = i.clientOptions.middleware.workspace;
                r && r.didChangeWorkspaceFolders
                  ? r.didChangeWorkspaceFolders(e, t)
                  : t(e);
              });
            this._listeners.set(r, a);
          }),
          (e.prototype.unregister = function (e) {
            var t = this._listeners.get(e);
            void 0 !== t && (this._listeners.delete(e), t.dispose());
          }),
          (e.prototype.dispose = function () {
            var e, t;
            try {
              for (
                var n = r(this._listeners.values()), i = n.next();
                !i.done;
                i = n.next()
              ) {
                i.value.dispose();
              }
            } catch (o) {
              e = { error: o };
            } finally {
              try {
                i && !i.done && (t = n.return) && t.call(n);
              } finally {
                if (e) throw e.error;
              }
            }
            this._listeners.clear();
          }),
          (e.prototype.asProtocol = function (e) {
            return void 0 === e
              ? null
              : {
                  uri: this._client.code2ProtocolConverter.asUri(e.uri),
                  name: e.name,
                };
          }),
          e
        );
      })();
      t.WorkspaceFoldersFeature = c;
    },
    aSIW: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("BOov"),
        i = n("owkM");
      t.createConnection = function (e, t, n) {
        return (
          e.onError(function (e) {
            t(e[0], e[1], e[2]);
          }),
          e.onClose(n),
          {
            listen: function () {
              return e.listen();
            },
            sendRequest: function (t) {
              for (var n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
              return e.sendRequest.apply(
                e,
                [i.string(t) ? t : t.method].concat(n)
              );
            },
            onRequest: function (t, n) {
              return e.onRequest(i.string(t) ? t : t.method, n);
            },
            sendNotification: function (t, n) {
              return e.sendNotification(i.string(t) ? t : t.method, n);
            },
            onNotification: function (t, n) {
              return e.onNotification(i.string(t) ? t : t.method, n);
            },
            trace: function (t, n, r) {
              return void 0 === r && (r = !1), e.trace(t, n, r);
            },
            initialize: function (t) {
              return e.sendRequest(r.InitializeRequest.type, t);
            },
            shutdown: function () {
              return e.sendRequest(r.ShutdownRequest.type, void 0);
            },
            exit: function () {
              return e.sendNotification(r.ExitNotification.type);
            },
            onLogMessage: function (t) {
              return e.onNotification(r.LogMessageNotification.type, t);
            },
            onShowMessage: function (t) {
              return e.onNotification(r.ShowMessageNotification.type, t);
            },
            onTelemetry: function (t) {
              return e.onNotification(r.TelemetryEventNotification.type, t);
            },
            didChangeConfiguration: function (t) {
              return e.sendNotification(
                r.DidChangeConfigurationNotification.type,
                t
              );
            },
            didChangeWatchedFiles: function (t) {
              return e.sendNotification(
                r.DidChangeWatchedFilesNotification.type,
                t
              );
            },
            didOpenTextDocument: function (t) {
              return e.sendNotification(
                r.DidOpenTextDocumentNotification.type,
                t
              );
            },
            didChangeTextDocument: function (t) {
              return e.sendNotification(
                r.DidChangeTextDocumentNotification.type,
                t
              );
            },
            didCloseTextDocument: function (t) {
              return e.sendNotification(
                r.DidCloseTextDocumentNotification.type,
                t
              );
            },
            didSaveTextDocument: function (t) {
              return e.sendNotification(
                r.DidSaveTextDocumentNotification.type,
                t
              );
            },
            onDiagnostics: function (t) {
              return e.onNotification(r.PublishDiagnosticsNotification.type, t);
            },
            dispose: function () {
              return e.dispose();
            },
          }
        );
      };
    },
    bwr2: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("oL6p"),
        i = (function () {
          function e(e, t) {
            (this.name = e),
              (this.p2m = t),
              (this.diagnostics = new Map()),
              (this.toDispose = new r.DisposableCollection());
          }
          return (
            (e.prototype.dispose = function () {
              this.toDispose.dispose();
            }),
            (e.prototype.get = function (e) {
              var t = this.diagnostics.get(e);
              return t ? t.diagnostics : [];
            }),
            (e.prototype.set = function (e, t) {
              var n = this,
                i = this.diagnostics.get(e);
              if (i) i.diagnostics = t;
              else {
                var s = new o(e, t, this.name, this.p2m);
                this.diagnostics.set(e, s),
                  this.toDispose.push(
                    r.Disposable.create(function () {
                      n.diagnostics.delete(e), s.dispose();
                    })
                  );
              }
            }),
            e
          );
        })();
      t.MonacoDiagnosticCollection = i;
      var o = (function () {
        function e(e, t, n, r) {
          var i = this;
          (this.owner = n),
            (this.p2m = r),
            (this._markers = []),
            (this._diagnostics = []),
            (this.uri = monaco.Uri.parse(e)),
            (this.diagnostics = t),
            monaco.editor.onDidCreateModel(function (e) {
              return i.doUpdateModelMarkers(e);
            });
        }
        return (
          Object.defineProperty(e.prototype, "diagnostics", {
            get: function () {
              return this._diagnostics;
            },
            set: function (e) {
              (this._diagnostics = e),
                (this._markers = this.p2m.asDiagnostics(e)),
                this.updateModelMarkers();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "markers", {
            get: function () {
              return this._markers;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.dispose = function () {
            (this._markers = []), this.updateModelMarkers();
          }),
          (e.prototype.updateModelMarkers = function () {
            var e = monaco.editor.getModel(this.uri);
            this.doUpdateModelMarkers(e);
          }),
          (e.prototype.doUpdateModelMarkers = function (e) {
            e &&
              this.uri.toString() === e.uri.toString() &&
              monaco.editor.setModelMarkers(e, this.owner, this._markers);
          }),
          e
        );
      })();
      t.MonacoModelDiagnostics = o;
    },
    f7Fo: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n("Gkij");
      var i;
      !(function (e) {
        (e.ParseError = -32700),
          (e.InvalidRequest = -32600),
          (e.MethodNotFound = -32601),
          (e.InvalidParams = -32602),
          (e.InternalError = -32603),
          (e.serverErrorStart = -32099),
          (e.serverErrorEnd = -32e3),
          (e.ServerNotInitialized = -32002),
          (e.UnknownErrorCode = -32001),
          (e.RequestCancelled = -32800),
          (e.MessageWriteError = 1),
          (e.MessageReadError = 2);
      })((i = t.ErrorCodes || (t.ErrorCodes = {})));
      class o extends Error {
        constructor(e, t, n) {
          super(t),
            (this.code = r.number(e) ? e : i.UnknownErrorCode),
            (this.data = n),
            Object.setPrototypeOf(this, o.prototype);
        }
        toJson() {
          return { code: this.code, message: this.message, data: this.data };
        }
      }
      t.ResponseError = o;
      class s {
        constructor(e, t) {
          (this._method = e), (this._numberOfParams = t);
        }
        get method() {
          return this._method;
        }
        get numberOfParams() {
          return this._numberOfParams;
        }
      }
      t.AbstractMessageType = s;
      t.RequestType0 = class extends s {
        constructor(e) {
          super(e, 0), (this._ = void 0);
        }
      };
      t.RequestType = class extends s {
        constructor(e) {
          super(e, 1), (this._ = void 0);
        }
      };
      t.RequestType1 = class extends s {
        constructor(e) {
          super(e, 1), (this._ = void 0);
        }
      };
      t.RequestType2 = class extends s {
        constructor(e) {
          super(e, 2), (this._ = void 0);
        }
      };
      t.RequestType3 = class extends s {
        constructor(e) {
          super(e, 3), (this._ = void 0);
        }
      };
      t.RequestType4 = class extends s {
        constructor(e) {
          super(e, 4), (this._ = void 0);
        }
      };
      t.RequestType5 = class extends s {
        constructor(e) {
          super(e, 5), (this._ = void 0);
        }
      };
      t.RequestType6 = class extends s {
        constructor(e) {
          super(e, 6), (this._ = void 0);
        }
      };
      t.RequestType7 = class extends s {
        constructor(e) {
          super(e, 7), (this._ = void 0);
        }
      };
      t.RequestType8 = class extends s {
        constructor(e) {
          super(e, 8), (this._ = void 0);
        }
      };
      t.RequestType9 = class extends s {
        constructor(e) {
          super(e, 9), (this._ = void 0);
        }
      };
      t.NotificationType = class extends s {
        constructor(e) {
          super(e, 1), (this._ = void 0);
        }
      };
      t.NotificationType0 = class extends s {
        constructor(e) {
          super(e, 0), (this._ = void 0);
        }
      };
      t.NotificationType1 = class extends s {
        constructor(e) {
          super(e, 1), (this._ = void 0);
        }
      };
      t.NotificationType2 = class extends s {
        constructor(e) {
          super(e, 2), (this._ = void 0);
        }
      };
      t.NotificationType3 = class extends s {
        constructor(e) {
          super(e, 3), (this._ = void 0);
        }
      };
      t.NotificationType4 = class extends s {
        constructor(e) {
          super(e, 4), (this._ = void 0);
        }
      };
      t.NotificationType5 = class extends s {
        constructor(e) {
          super(e, 5), (this._ = void 0);
        }
      };
      t.NotificationType6 = class extends s {
        constructor(e) {
          super(e, 6), (this._ = void 0);
        }
      };
      t.NotificationType7 = class extends s {
        constructor(e) {
          super(e, 7), (this._ = void 0);
        }
      };
      t.NotificationType8 = class extends s {
        constructor(e) {
          super(e, 8), (this._ = void 0);
        }
      };
      (t.NotificationType9 = class extends s {
        constructor(e) {
          super(e, 9), (this._ = void 0);
        }
      }),
        (t.isRequestMessage = function (e) {
          let t = e;
          return t && r.string(t.method) && (r.string(t.id) || r.number(t.id));
        }),
        (t.isNotificationMessage = function (e) {
          let t = e;
          return t && r.string(t.method) && void 0 === e.id;
        }),
        (t.isResponseMessage = function (e) {
          let t = e;
          return (
            t &&
            (void 0 !== t.result || !!t.error) &&
            (r.string(t.id) || r.number(t.id) || null === t.id)
          );
        });
    },
    fIkx: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          e.create = function (e) {
            return { dispose: e };
          };
        })(t.Disposable || (t.Disposable = {})),
        (function (e) {
          const t = { dispose() {} };
          e.None = function () {
            return t;
          };
        })(t.Event || (t.Event = {}));
      class r {
        add(e, t = null, n) {
          this._callbacks || ((this._callbacks = []), (this._contexts = [])),
            this._callbacks.push(e),
            this._contexts.push(t),
            Array.isArray(n) && n.push({ dispose: () => this.remove(e, t) });
        }
        remove(e, t = null) {
          if (this._callbacks) {
            for (var n = !1, r = 0, i = this._callbacks.length; r < i; r++)
              if (this._callbacks[r] === e) {
                if (this._contexts[r] === t)
                  return (
                    this._callbacks.splice(r, 1),
                    void this._contexts.splice(r, 1)
                  );
                n = !0;
              }
            if (n)
              throw new Error(
                "When adding a listener with a context, you should remove it with the same context"
              );
          }
        }
        invoke(...e) {
          if (!this._callbacks) return [];
          for (
            var t = [],
              n = this._callbacks.slice(0),
              r = this._contexts.slice(0),
              i = 0,
              o = n.length;
            i < o;
            i++
          )
            try {
              t.push(n[i].apply(r[i], e));
            } catch (s) {
              console.error(s);
            }
          return t;
        }
        isEmpty() {
          return !this._callbacks || 0 === this._callbacks.length;
        }
        dispose() {
          (this._callbacks = void 0), (this._contexts = void 0);
        }
      }
      class i {
        constructor(e) {
          this._options = e;
        }
        get event() {
          return (
            this._event ||
              (this._event = (e, t, n) => {
                let o;
                return (
                  this._callbacks || (this._callbacks = new r()),
                  this._options &&
                    this._options.onFirstListenerAdd &&
                    this._callbacks.isEmpty() &&
                    this._options.onFirstListenerAdd(this),
                  this._callbacks.add(e, t),
                  (o = {
                    dispose: () => {
                      this._callbacks.remove(e, t),
                        (o.dispose = i._noop),
                        this._options &&
                          this._options.onLastListenerRemove &&
                          this._callbacks.isEmpty() &&
                          this._options.onLastListenerRemove(this);
                    },
                  }),
                  Array.isArray(n) && n.push(o),
                  o
                );
              }),
            this._event
          );
        }
        fire(e) {
          this._callbacks && this._callbacks.invoke.call(this._callbacks, e);
        }
        dispose() {
          this._callbacks &&
            (this._callbacks.dispose(), (this._callbacks = void 0));
        }
      }
      (i._noop = function () {}), (t.Emitter = i);
    },
    h0WC: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return r(t, e), t;
      })(n("uoVZ").CodeLens);
      t.default = i;
    },
    hC2b: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = Object.prototype.toString;
      function i(e) {
        return "[object String]" === r.call(e);
      }
      function o(e) {
        return "[object Function]" === r.call(e);
      }
      function s(e) {
        return Array.isArray(e);
      }
      (t.boolean = function (e) {
        return !0 === e || !1 === e;
      }),
        (t.string = i),
        (t.number = function (e) {
          return "[object Number]" === r.call(e);
        }),
        (t.error = function (e) {
          return "[object Error]" === r.call(e);
        }),
        (t.func = o),
        (t.array = s),
        (t.stringArray = function (e) {
          return (
            s(e) &&
            e.every(function (e) {
              return i(e);
            })
          );
        }),
        (t.typedArray = function (e, t) {
          return Array.isArray(e) && e.every(t);
        }),
        (t.thenable = function (e) {
          return e && o(e.then);
        });
    },
    hde3: function (e, t, n) {
      "use strict";
      n.r(t),
        function (e) {
          var n,
            r = (function () {
              var e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                };
              return function (t, n) {
                function r() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })();
          if ("object" === typeof e) n = "win32" === e.platform;
          else if ("object" === typeof navigator) {
            var i = navigator.userAgent;
            n = i.indexOf("Windows") >= 0;
          }
          var o = /^\w[\w\d+.-]*$/,
            s = /^\//,
            a = /^\/\//;
          var c = "",
            u = "/",
            d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
            l = (function () {
              function e(e, t, n, r, i) {
                "object" === typeof e
                  ? ((this.scheme = e.scheme || c),
                    (this.authority = e.authority || c),
                    (this.path = e.path || c),
                    (this.query = e.query || c),
                    (this.fragment = e.fragment || c))
                  : ((this.scheme = e || c),
                    (this.authority = t || c),
                    (this.path = (function (e, t) {
                      switch (e) {
                        case "https":
                        case "http":
                        case "file":
                          t ? t[0] !== u && (t = u + t) : (t = u);
                      }
                      return t;
                    })(this.scheme, n || c)),
                    (this.query = r || c),
                    (this.fragment = i || c),
                    (function (e) {
                      if (e.scheme && !o.test(e.scheme))
                        throw new Error(
                          "[UriError]: Scheme contains illegal characters."
                        );
                      if (e.path)
                        if (e.authority) {
                          if (!s.test(e.path))
                            throw new Error(
                              '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                            );
                        } else if (a.test(e.path))
                          throw new Error(
                            '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                          );
                    })(this));
              }
              return (
                (e.isUri = function (t) {
                  return (
                    t instanceof e ||
                    (!!t &&
                      "string" === typeof t.authority &&
                      "string" === typeof t.fragment &&
                      "string" === typeof t.path &&
                      "string" === typeof t.query &&
                      "string" === typeof t.scheme)
                  );
                }),
                Object.defineProperty(e.prototype, "fsPath", {
                  get: function () {
                    return v(this);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.with = function (e) {
                  if (!e) return this;
                  var t = e.scheme,
                    n = e.authority,
                    r = e.path,
                    i = e.query,
                    o = e.fragment;
                  return (
                    void 0 === t ? (t = this.scheme) : null === t && (t = c),
                    void 0 === n ? (n = this.authority) : null === n && (n = c),
                    void 0 === r ? (r = this.path) : null === r && (r = c),
                    void 0 === i ? (i = this.query) : null === i && (i = c),
                    void 0 === o ? (o = this.fragment) : null === o && (o = c),
                    t === this.scheme &&
                    n === this.authority &&
                    r === this.path &&
                    i === this.query &&
                    o === this.fragment
                      ? this
                      : new f(t, n, r, i, o)
                  );
                }),
                (e.parse = function (e) {
                  var t = d.exec(e);
                  return t
                    ? new f(
                        t[2] || c,
                        decodeURIComponent(t[4] || c),
                        decodeURIComponent(t[5] || c),
                        decodeURIComponent(t[7] || c),
                        decodeURIComponent(t[9] || c)
                      )
                    : new f(c, c, c, c, c);
                }),
                (e.file = function (e) {
                  var t = c;
                  if (
                    (n && (e = e.replace(/\\/g, u)), e[0] === u && e[1] === u)
                  ) {
                    var r = e.indexOf(u, 2);
                    -1 === r
                      ? ((t = e.substring(2)), (e = u))
                      : ((t = e.substring(2, r)), (e = e.substring(r) || u));
                  }
                  return new f("file", t, e, c, c);
                }),
                (e.from = function (e) {
                  return new f(
                    e.scheme,
                    e.authority,
                    e.path,
                    e.query,
                    e.fragment
                  );
                }),
                (e.prototype.toString = function (e) {
                  return void 0 === e && (e = !1), y(this, e);
                }),
                (e.prototype.toJSON = function () {
                  return this;
                }),
                (e.revive = function (t) {
                  if (t) {
                    if (t instanceof e) return t;
                    var n = new f(t);
                    return (
                      (n._fsPath = t.fsPath), (n._formatted = t.external), n
                    );
                  }
                  return t;
                }),
                e
              );
            })();
          t.default = l;
          var p,
            f = (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._formatted = null), (t._fsPath = null), t;
              }
              return (
                r(t, e),
                Object.defineProperty(t.prototype, "fsPath", {
                  get: function () {
                    return (
                      this._fsPath || (this._fsPath = v(this)), this._fsPath
                    );
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.toString = function (e) {
                  return (
                    void 0 === e && (e = !1),
                    e
                      ? y(this, !0)
                      : (this._formatted || (this._formatted = y(this, !1)),
                        this._formatted)
                  );
                }),
                (t.prototype.toJSON = function () {
                  var e = { $mid: 1 };
                  return (
                    this._fsPath && (e.fsPath = this._fsPath),
                    this._formatted && (e.external = this._formatted),
                    this.path && (e.path = this.path),
                    this.scheme && (e.scheme = this.scheme),
                    this.authority && (e.authority = this.authority),
                    this.query && (e.query = this.query),
                    this.fragment && (e.fragment = this.fragment),
                    e
                  );
                }),
                t
              );
            })(l),
            m =
              (((p = {})[58] = "%3A"),
              (p[47] = "%2F"),
              (p[63] = "%3F"),
              (p[35] = "%23"),
              (p[91] = "%5B"),
              (p[93] = "%5D"),
              (p[64] = "%40"),
              (p[33] = "%21"),
              (p[36] = "%24"),
              (p[38] = "%26"),
              (p[39] = "%27"),
              (p[40] = "%28"),
              (p[41] = "%29"),
              (p[42] = "%2A"),
              (p[43] = "%2B"),
              (p[44] = "%2C"),
              (p[59] = "%3B"),
              (p[61] = "%3D"),
              (p[32] = "%20"),
              p);
          function g(e, t) {
            for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
              var o = e.charCodeAt(i);
              if (
                (o >= 97 && o <= 122) ||
                (o >= 65 && o <= 90) ||
                (o >= 48 && o <= 57) ||
                45 === o ||
                46 === o ||
                95 === o ||
                126 === o ||
                (t && 47 === o)
              )
                -1 !== r &&
                  ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
                  void 0 !== n && (n += e.charAt(i));
              else {
                void 0 === n && (n = e.substr(0, i));
                var s = m[o];
                void 0 !== s
                  ? (-1 !== r &&
                      ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
                    (n += s))
                  : -1 === r && (r = i);
              }
            }
            return (
              -1 !== r && (n += encodeURIComponent(e.substring(r))),
              void 0 !== n ? n : e
            );
          }
          function h(e) {
            for (var t = void 0, n = 0; n < e.length; n++) {
              var r = e.charCodeAt(n);
              35 === r || 63 === r
                ? (void 0 === t && (t = e.substr(0, n)), (t += m[r]))
                : void 0 !== t && (t += e[n]);
            }
            return void 0 !== t ? t : e;
          }
          function v(e) {
            var t;
            return (
              (t =
                e.authority && e.path.length > 1 && "file" === e.scheme
                  ? "//" + e.authority + e.path
                  : 47 === e.path.charCodeAt(0) &&
                    ((e.path.charCodeAt(1) >= 65 &&
                      e.path.charCodeAt(1) <= 90) ||
                      (e.path.charCodeAt(1) >= 97 &&
                        e.path.charCodeAt(1) <= 122)) &&
                    58 === e.path.charCodeAt(2)
                  ? e.path[1].toLowerCase() + e.path.substr(2)
                  : e.path),
              n && (t = t.replace(/\//g, "\\")),
              t
            );
          }
          function y(e, t) {
            var n = t ? h : g,
              r = "",
              i = e.scheme,
              o = e.authority,
              s = e.path,
              a = e.query,
              c = e.fragment;
            if (
              (i && ((r += i), (r += ":")),
              (o || "file" === i) && ((r += u), (r += u)),
              o)
            ) {
              var d = o.indexOf("@");
              if (-1 !== d) {
                var l = o.substr(0, d);
                (o = o.substr(d + 1)),
                  -1 === (d = l.indexOf(":"))
                    ? (r += n(l, !1))
                    : ((r += n(l.substr(0, d), !1)),
                      (r += ":"),
                      (r += n(l.substr(d + 1), !1))),
                  (r += "@");
              }
              -1 === (d = (o = o.toLowerCase()).indexOf(":"))
                ? (r += n(o, !1))
                : ((r += n(o.substr(0, d), !1)), (r += o.substr(d)));
            }
            if (s) {
              if (
                s.length >= 3 &&
                47 === s.charCodeAt(0) &&
                58 === s.charCodeAt(2)
              )
                (p = s.charCodeAt(1)) >= 65 &&
                  p <= 90 &&
                  (s = "/" + String.fromCharCode(p + 32) + ":" + s.substr(3));
              else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
                var p;
                (p = s.charCodeAt(0)) >= 65 &&
                  p <= 90 &&
                  (s = String.fromCharCode(p + 32) + ":" + s.substr(2));
              }
              r += n(s, !0);
            }
            return (
              a && ((r += "?"), (r += n(a, !1))),
              c && ((r += "#"), (r += t ? c : g(c, !1))),
              r
            );
          }
        }.call(this, n("8oxB"));
    },
    in9m: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("Gz0x"),
        i = (function () {
          function e() {
            this.channels = new Map();
          }
          return (
            (e.prototype.showMessage = function (e, t) {
              for (var n = [], i = 2; i < arguments.length; i++)
                n[i - 2] = arguments[i];
              return (
                e === r.MessageType.Error && console.error(t),
                e === r.MessageType.Warning && console.warn(t),
                e === r.MessageType.Info && console.info(t),
                e === r.MessageType.Log && console.log(t),
                Promise.resolve(void 0)
              );
            }),
            (e.prototype.createOutputChannel = function (e) {
              var t = this.channels.get(e);
              if (t) return t;
              var n = {
                append: function (t) {
                  console.log(e + ": " + t);
                },
                appendLine: function (t) {
                  console.log(e + ": " + t);
                },
                show: function () {},
                dispose: function () {},
              };
              return this.channels.set(e, n), n;
            }),
            e
          );
        })();
      t.ConsoleWindow = i;
    },
    ixam: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
        function e(e) {
          (this.defaultDelay = e),
            (this.timeout = void 0),
            (this.completionPromise = void 0),
            (this.onSuccess = void 0),
            (this.task = void 0);
        }
        return (
          (e.prototype.trigger = function (e, t) {
            var n = this;
            return (
              void 0 === t && (t = this.defaultDelay),
              (this.task = e),
              t >= 0 && this.cancelTimeout(),
              this.completionPromise ||
                (this.completionPromise = new Promise(function (e) {
                  n.onSuccess = e;
                }).then(function () {
                  (n.completionPromise = void 0), (n.onSuccess = void 0);
                  var e = n.task();
                  return (n.task = void 0), e;
                })),
              (t >= 0 || void 0 === this.timeout) &&
                (this.timeout = setTimeout(
                  function () {
                    (n.timeout = void 0), n.onSuccess(void 0);
                  },
                  t >= 0 ? t : this.defaultDelay
                )),
              this.completionPromise
            );
          }),
          (e.prototype.forceDelivery = function () {
            if (this.completionPromise) {
              this.cancelTimeout();
              var e = this.task();
              return (
                (this.completionPromise = void 0),
                (this.onSuccess = void 0),
                (this.task = void 0),
                e
              );
            }
          }),
          (e.prototype.isTriggered = function () {
            return void 0 !== this.timeout;
          }),
          (e.prototype.cancel = function () {
            this.cancelTimeout(), (this.completionPromise = void 0);
          }),
          (e.prototype.cancelTimeout = function () {
            void 0 !== this.timeout &&
              (clearTimeout(this.timeout), (this.timeout = void 0));
          }),
          e
        );
      })();
      t.Delayer = r;
    },
    k5Vz: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n("fIkx"),
          i = n("Gkij");
        let o = "Content-Length: ",
          s = "\r\n";
        !(function (e) {
          e.is = function (e) {
            let t = e;
            return (
              t &&
              i.func(t.dispose) &&
              i.func(t.onClose) &&
              i.func(t.onError) &&
              i.func(t.write)
            );
          };
        })(t.MessageWriter || (t.MessageWriter = {}));
        class a {
          constructor() {
            (this.errorEmitter = new r.Emitter()),
              (this.closeEmitter = new r.Emitter());
          }
          dispose() {
            this.errorEmitter.dispose(), this.closeEmitter.dispose();
          }
          get onError() {
            return this.errorEmitter.event;
          }
          fireError(e, t, n) {
            this.errorEmitter.fire([this.asError(e), t, n]);
          }
          get onClose() {
            return this.closeEmitter.event;
          }
          fireClose() {
            this.closeEmitter.fire(void 0);
          }
          asError(e) {
            return e instanceof Error
              ? e
              : new Error(
                  `Writer recevied error. Reason: ${
                    i.string(e.message) ? e.message : "unknown"
                  }`
                );
          }
        }
        t.AbstractMessageWriter = a;
        t.StreamMessageWriter = class extends a {
          constructor(e, t = "utf8") {
            super(),
              (this.writable = e),
              (this.encoding = t),
              (this.errorCount = 0),
              this.writable.on("error", (e) => this.fireError(e)),
              this.writable.on("close", () => this.fireClose());
          }
          write(t) {
            let n = JSON.stringify(t),
              r = e.byteLength(n, this.encoding),
              i = [o, r.toString(), s, s];
            try {
              this.writable.write(i.join(""), "ascii"),
                this.writable.write(n, this.encoding),
                (this.errorCount = 0);
            } catch (a) {
              this.errorCount++, this.fireError(a, t, this.errorCount);
            }
          }
        };
        t.IPCMessageWriter = class extends a {
          constructor(e) {
            super(),
              (this.process = e),
              (this.errorCount = 0),
              (this.queue = []),
              (this.sending = !1);
            let t = this.process;
            t.on("error", (e) => this.fireError(e)),
              t.on("close", () => this.fireClose);
          }
          write(e) {
            this.sending || 0 !== this.queue.length
              ? this.queue.push(e)
              : this.doWriteMessage(e);
          }
          doWriteMessage(e) {
            try {
              this.process.send &&
                ((this.sending = !0),
                this.process.send(e, void 0, void 0, (t) => {
                  (this.sending = !1),
                    t
                      ? (this.errorCount++,
                        this.fireError(t, e, this.errorCount))
                      : (this.errorCount = 0),
                    this.queue.length > 0 &&
                      this.doWriteMessage(this.queue.shift());
                }));
            } catch (t) {
              this.errorCount++, this.fireError(t, e, this.errorCount);
            }
          }
        };
        t.SocketMessageWriter = class extends a {
          constructor(e, t = "utf8") {
            super(),
              (this.socket = e),
              (this.queue = []),
              (this.sending = !1),
              (this.encoding = t),
              (this.errorCount = 0),
              this.socket.on("error", (e) => this.fireError(e)),
              this.socket.on("close", () => this.fireClose());
          }
          write(e) {
            this.sending || 0 !== this.queue.length
              ? this.queue.push(e)
              : this.doWriteMessage(e);
          }
          doWriteMessage(t) {
            let n = JSON.stringify(t),
              r = e.byteLength(n, this.encoding),
              i = [o, r.toString(), s, s];
            try {
              (this.sending = !0),
                this.socket.write(i.join(""), "ascii", (e) => {
                  e && this.handleError(e, t);
                  try {
                    this.socket.write(n, this.encoding, (e) => {
                      (this.sending = !1),
                        e ? this.handleError(e, t) : (this.errorCount = 0),
                        this.queue.length > 0 &&
                          this.doWriteMessage(this.queue.shift());
                    });
                  } catch (e) {
                    this.handleError(e, t);
                  }
                });
            } catch (a) {
              this.handleError(a, t);
            }
          }
          handleError(e, t) {
            this.errorCount++, this.fireError(e, t, this.errorCount);
          }
        };
      }.call(this, n("HDXh").Buffer));
    },
    kjvz: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        o,
        s,
        a = n("owkM"),
        c = n("Gz0x");
      !(function (e) {
        e.is = function (e) {
          return !!e && "data" in e;
        };
      })((i = t.ProtocolDocumentLink || (t.ProtocolDocumentLink = {}))),
        (function (e) {
          e.is = function (e) {
            return !!e && "data" in e;
          };
        })((o = t.ProtocolCodeLens || (t.ProtocolCodeLens = {}))),
        (function (e) {
          e.is = function (e) {
            return !!e && "data" in e;
          };
        })((s = t.ProtocolCompletionItem || (t.ProtocolCompletionItem = {})));
      var u = (function () {
        function e() {}
        return (
          (e.prototype.asPosition = function (e, t) {
            return {
              line: void 0 === e || null === e ? void 0 : e - 1,
              character: void 0 === t || null === t ? void 0 : t - 1,
            };
          }),
          (e.prototype.asRange = function (e) {
            if (void 0 !== e)
              return null === e
                ? null
                : {
                    start: this.asPosition(e.startLineNumber, e.startColumn),
                    end: this.asPosition(e.endLineNumber, e.endColumn),
                  };
          }),
          (e.prototype.asTextDocumentIdentifier = function (e) {
            return { uri: e.uri.toString() };
          }),
          (e.prototype.asTextDocumentPositionParams = function (e, t) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              position: this.asPosition(t.lineNumber, t.column),
            };
          }),
          (e.prototype.asCompletionParams = function (e, t, n) {
            return Object.assign(this.asTextDocumentPositionParams(e, t), {
              context: this.asCompletionContext(n),
            });
          }),
          (e.prototype.asCompletionContext = function (e) {
            return {
              triggerKind: this.asTriggerKind(e.triggerKind),
              triggerCharacter: e.triggerCharacter,
            };
          }),
          (e.prototype.asTriggerKind = function (e) {
            switch (e) {
              case monaco.languages.SuggestTriggerKind.TriggerCharacter:
                return c.CompletionTriggerKind.TriggerCharacter;
              case monaco.languages.SuggestTriggerKind
                .TriggerForIncompleteCompletions:
                return c.CompletionTriggerKind.TriggerForIncompleteCompletions;
              default:
                return c.CompletionTriggerKind.Invoked;
            }
          }),
          (e.prototype.asCompletionItem = function (e) {
            var t = { label: e.label },
              n = s.is(e) ? e : void 0;
            return (
              e.detail && (t.detail = e.detail),
              e.documentation &&
                (n && n.documentationFormat
                  ? (t.documentation = this.asDocumentation(
                      n.documentationFormat,
                      e.documentation
                    ))
                  : (t.documentation = e.documentation)),
              e.filterText && (t.filterText = e.filterText),
              this.fillPrimaryInsertText(t, e),
              a.number(e.kind) &&
                (t.kind = this.asCompletionItemKind(
                  e.kind,
                  n && n.originalItemKind
                )),
              e.sortText && (t.sortText = e.sortText),
              e.additionalTextEdits &&
                (t.additionalTextEdits = this.asTextEdits(
                  e.additionalTextEdits
                )),
              e.command && (t.command = this.asCommand(e.command)),
              e.commitCharacters &&
                (t.commitCharacters = e.commitCharacters.slice()),
              e.command && (t.command = this.asCommand(e.command)),
              n &&
                (void 0 !== n.data && (t.data = n.data),
                (!0 !== n.deprecated && !1 !== n.deprecated) ||
                  (t.deprecated = n.deprecated)),
              t
            );
          }),
          (e.prototype.asCompletionItemKind = function (e, t) {
            return void 0 !== t ? t : e + 1;
          }),
          (e.prototype.asDocumentation = function (e, t) {
            switch (e) {
              case c.MarkupKind.PlainText:
                return { kind: e, value: t };
              case c.MarkupKind.Markdown:
                return { kind: e, value: t.value };
              default:
                return "Unsupported Markup content received. Kind is: " + e;
            }
          }),
          (e.prototype.fillPrimaryInsertText = function (e, t) {
            var n,
              r,
              i = c.InsertTextFormat.PlainText;
            t.textEdit
              ? ((n = t.textEdit.text), (r = this.asRange(t.textEdit.range)))
              : "string" === typeof t.insertText
              ? (n = t.insertText)
              : t.insertText &&
                ((i = c.InsertTextFormat.Snippet), (n = t.insertText.value)),
              t.range && (r = this.asRange(t.range)),
              (e.insertTextFormat = i),
              t.fromEdit && n && r
                ? (e.textEdit = { newText: n, range: r })
                : (e.insertText = n);
          }),
          (e.prototype.asTextEdit = function (e) {
            return { range: this.asRange(e.range), newText: e.text };
          }),
          (e.prototype.asTextEdits = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asTextEdit(e);
              });
          }),
          (e.prototype.asReferenceParams = function (e, t, n) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              position: this.asPosition(t.lineNumber, t.column),
              context: { includeDeclaration: n.includeDeclaration },
            };
          }),
          (e.prototype.asDocumentSymbolParams = function (e) {
            return { textDocument: this.asTextDocumentIdentifier(e) };
          }),
          (e.prototype.asCodeLensParams = function (e) {
            return { textDocument: this.asTextDocumentIdentifier(e) };
          }),
          (e.prototype.asDiagnosticSeverity = function (e) {
            switch (e) {
              case monaco.MarkerSeverity.Error:
                return c.DiagnosticSeverity.Error;
              case monaco.MarkerSeverity.Warning:
                return c.DiagnosticSeverity.Warning;
              case monaco.MarkerSeverity.Info:
                return c.DiagnosticSeverity.Information;
              case monaco.MarkerSeverity.Hint:
                return c.DiagnosticSeverity.Hint;
            }
          }),
          (e.prototype.asDiagnostic = function (e) {
            var t = this.asRange(
                new monaco.Range(
                  e.startLineNumber,
                  e.startColumn,
                  e.endLineNumber,
                  e.endColumn
                )
              ),
              n = this.asDiagnosticSeverity(e.severity);
            return c.Diagnostic.create(t, e.message, n, e.code, e.source);
          }),
          (e.prototype.asDiagnostics = function (e) {
            var t = this;
            return void 0 === e || null === e
              ? e
              : e.map(function (e) {
                  return t.asDiagnostic(e);
                });
          }),
          (e.prototype.asCodeActionContext = function (e) {
            if (void 0 === e || null === e) return e;
            var t = this.asDiagnostics(e.markers);
            return c.CodeActionContext.create(
              t,
              a.string(e.only) ? [e.only] : void 0
            );
          }),
          (e.prototype.asCodeActionParams = function (e, t, n) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              range: this.asRange(t),
              context: this.asCodeActionContext(n),
            };
          }),
          (e.prototype.asCommand = function (e) {
            if (e) {
              var t = e.arguments || [];
              return c.Command.create.apply(
                c.Command,
                [e.title, e.id].concat(t)
              );
            }
          }),
          (e.prototype.asCodeLens = function (e) {
            var t = c.CodeLens.create(this.asRange(e.range));
            return (
              e.command && (t.command = this.asCommand(e.command)),
              o.is(e) && e.data && (t.data = e.data),
              t
            );
          }),
          (e.prototype.asFormattingOptions = function (e) {
            return { tabSize: e.tabSize, insertSpaces: e.insertSpaces };
          }),
          (e.prototype.asDocumentFormattingParams = function (e, t) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              options: this.asFormattingOptions(t),
            };
          }),
          (e.prototype.asDocumentRangeFormattingParams = function (e, t, n) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              range: this.asRange(t),
              options: this.asFormattingOptions(n),
            };
          }),
          (e.prototype.asDocumentOnTypeFormattingParams = function (
            e,
            t,
            n,
            r
          ) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              position: this.asPosition(t.lineNumber, t.column),
              ch: n,
              options: this.asFormattingOptions(r),
            };
          }),
          (e.prototype.asRenameParams = function (e, t, n) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              position: this.asPosition(t.lineNumber, t.column),
              newName: n,
            };
          }),
          (e.prototype.asDocumentLinkParams = function (e) {
            return { textDocument: this.asTextDocumentIdentifier(e) };
          }),
          (e.prototype.asDocumentLink = function (e) {
            var t = c.DocumentLink.create(this.asRange(e.range));
            return (
              e.url && (t.target = e.url),
              i.is(e) && e.data && (t.data = e.data),
              t
            );
          }),
          e
        );
      })();
      t.MonacoToProtocolConverter = u;
      var d = (function () {
        function e() {}
        return (
          (e.prototype.asResourceEdits = function (e, t, n) {
            return {
              resource: e,
              edits: this.asTextEdits(t),
              modelVersionId: n,
            };
          }),
          (e.prototype.asWorkspaceEdit = function (e) {
            if (e) {
              var t = [];
              if (e.documentChanges)
                for (var n = 0, r = e.documentChanges; n < r.length; n++) {
                  var i = r[n],
                    o = monaco.Uri.parse(i.textDocument.uri),
                    s =
                      "number" === typeof i.textDocument.version
                        ? i.textDocument.version
                        : void 0;
                  t.push(this.asResourceEdits(o, i.edits, s));
                }
              else if (e.changes)
                for (var a = 0, c = Object.keys(e.changes); a < c.length; a++) {
                  var u = c[a];
                  o = monaco.Uri.parse(u);
                  t.push(this.asResourceEdits(o, e.changes[u]));
                }
              return { edits: t };
            }
          }),
          (e.prototype.asTextEdit = function (e) {
            if (e) return { range: this.asRange(e.range), text: e.newText };
          }),
          (e.prototype.asTextEdits = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asTextEdit(e);
              });
          }),
          (e.prototype.asCodeLens = function (e) {
            if (e) {
              var t = { range: this.asRange(e.range) };
              return (
                e.command && (t.command = this.asCommand(e.command)),
                void 0 !== e.data && null !== e.data && (t.data = e.data),
                t
              );
            }
          }),
          (e.prototype.asCodeLenses = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asCodeLens(e);
              });
          }),
          (e.prototype.asCodeActions = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asCodeAction(e);
            });
          }),
          (e.prototype.asCodeAction = function (e) {
            return c.CodeAction.is(e)
              ? {
                  title: e.title,
                  command: this.asCommand(e.command),
                  edit: this.asWorkspaceEdit(e.edit),
                  diagnostics: this.asDiagnostics(e.diagnostics),
                  kind: e.kind,
                }
              : {
                  command: {
                    id: e.command,
                    title: e.title,
                    arguments: e.arguments,
                  },
                  title: e.title,
                };
          }),
          (e.prototype.asCommand = function (e) {
            if (e)
              return { id: e.command, title: e.title, arguments: e.arguments };
          }),
          (e.prototype.asDocumentSymbol = function (e) {
            var t = this,
              n =
                e.children &&
                e.children.map(function (e) {
                  return t.asDocumentSymbol(e);
                });
            return {
              name: e.name,
              detail: e.detail || "",
              kind: this.asSymbolKind(e.kind),
              range: this.asRange(e.range),
              selectionRange: this.asRange(e.selectionRange),
              children: n,
            };
          }),
          (e.prototype.asDocumentSymbols = function (e) {
            var t = this;
            return c.DocumentSymbol.is(e[0])
              ? e.map(function (e) {
                  return t.asDocumentSymbol(e);
                })
              : this.asSymbolInformations(e);
          }),
          (e.prototype.asSymbolInformations = function (e, t) {
            var n = this;
            if (e)
              return e.map(function (e) {
                return n.asSymbolInformation(e, t);
              });
          }),
          (e.prototype.asSymbolInformation = function (e, t) {
            var n = this.asLocation(
              t ? r({}, e.location, { uri: t.toString() }) : e.location
            );
            return {
              name: e.name,
              detail: "",
              containerName: e.containerName,
              kind: this.asSymbolKind(e.kind),
              range: n.range,
              selectionRange: n.range,
            };
          }),
          (e.prototype.asSymbolKind = function (e) {
            return e <= c.SymbolKind.TypeParameter
              ? e - 1
              : monaco.languages.SymbolKind.Property;
          }),
          (e.prototype.asDocumentHighlights = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asDocumentHighlight(e);
              });
          }),
          (e.prototype.asDocumentHighlight = function (e) {
            return {
              range: this.asRange(e.range),
              kind: a.number(e.kind)
                ? this.asDocumentHighlightKind(e.kind)
                : void 0,
            };
          }),
          (e.prototype.asDocumentHighlightKind = function (e) {
            switch (e) {
              case c.DocumentHighlightKind.Text:
                return monaco.languages.DocumentHighlightKind.Text;
              case c.DocumentHighlightKind.Read:
                return monaco.languages.DocumentHighlightKind.Read;
              case c.DocumentHighlightKind.Write:
                return monaco.languages.DocumentHighlightKind.Write;
            }
            return monaco.languages.DocumentHighlightKind.Text;
          }),
          (e.prototype.asReferences = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asLocation(e);
              });
          }),
          (e.prototype.asDefinitionResult = function (e) {
            var t = this;
            if (e)
              return a.array(e)
                ? e.map(function (e) {
                    return t.asLocation(e);
                  })
                : this.asLocation(e);
          }),
          (e.prototype.asLocation = function (e) {
            if (e)
              return {
                uri: monaco.Uri.parse(e.uri),
                range: this.asRange(e.range),
              };
          }),
          (e.prototype.asSignatureHelp = function (e) {
            if (e) {
              var t = {};
              return (
                a.number(e.activeSignature)
                  ? (t.activeSignature = e.activeSignature)
                  : (t.activeSignature = 0),
                a.number(e.activeParameter)
                  ? (t.activeParameter = e.activeParameter)
                  : (t.activeParameter = 0),
                e.signatures
                  ? (t.signatures = this.asSignatureInformations(e.signatures))
                  : (t.signatures = []),
                t
              );
            }
          }),
          (e.prototype.asSignatureInformations = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asSignatureInformation(e);
            });
          }),
          (e.prototype.asSignatureInformation = function (e) {
            var t = { label: e.label };
            return (
              e.documentation &&
                (t.documentation = this.asDocumentation(e.documentation)),
              e.parameters
                ? (t.parameters = this.asParameterInformations(e.parameters))
                : (t.parameters = []),
              t
            );
          }),
          (e.prototype.asParameterInformations = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asParameterInformation(e);
            });
          }),
          (e.prototype.asParameterInformation = function (e) {
            var t = { label: e.label };
            return (
              e.documentation &&
                (t.documentation = this.asDocumentation(e.documentation)),
              t
            );
          }),
          (e.prototype.asHover = function (e) {
            if (e)
              return {
                contents: this.asHoverContent(e.contents),
                range: this.asRange(e.range),
              };
          }),
          (e.prototype.asHoverContent = function (e) {
            var t = this;
            return Array.isArray(e)
              ? e.map(function (e) {
                  return t.asMarkdownString(e);
                })
              : [this.asMarkdownString(e)];
          }),
          (e.prototype.asDocumentation = function (e) {
            return a.string(e)
              ? e
              : e.kind === c.MarkupKind.PlainText
              ? e.value
              : this.asMarkdownString(e);
          }),
          (e.prototype.asMarkdownString = function (e) {
            return c.MarkupContent.is(e)
              ? { value: e.value }
              : a.string(e)
              ? { value: e }
              : { value: "```" + e.language + "\n" + e.value + "\n```" };
          }),
          (e.prototype.asSeverity = function (e) {
            return 1 === e
              ? monaco.MarkerSeverity.Error
              : 2 === e
              ? monaco.MarkerSeverity.Warning
              : 3 === e
              ? monaco.MarkerSeverity.Info
              : monaco.MarkerSeverity.Hint;
          }),
          (e.prototype.asDiagnostics = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asDiagnostic(e);
              });
          }),
          (e.prototype.asDiagnostic = function (e) {
            return {
              code: "number" === typeof e.code ? e.code.toString() : e.code,
              severity: this.asSeverity(e.severity),
              message: e.message,
              source: e.source,
              startLineNumber: e.range.start.line + 1,
              startColumn: e.range.start.character + 1,
              endLineNumber: e.range.end.line + 1,
              endColumn: e.range.end.character + 1,
              relatedInformation: this.asRelatedInformations(
                e.relatedInformation
              ),
            };
          }),
          (e.prototype.asRelatedInformations = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asRelatedInformation(e);
              });
          }),
          (e.prototype.asRelatedInformation = function (e) {
            return {
              resource: monaco.Uri.parse(e.location.uri),
              startLineNumber: e.location.range.start.line + 1,
              startColumn: e.location.range.start.character + 1,
              endLineNumber: e.location.range.end.line + 1,
              endColumn: e.location.range.end.character + 1,
              message: e.message,
            };
          }),
          (e.prototype.asCompletionResult = function (e) {
            var t = this;
            return e
              ? Array.isArray(e)
                ? {
                    isIncomplete: !1,
                    items: e.map(function (e) {
                      return t.asCompletionItem(e);
                    }),
                  }
                : {
                    isIncomplete: e.isIncomplete,
                    items: e.items.map(this.asCompletionItem.bind(this)),
                  }
              : { isIncomplete: !1, items: [] };
          }),
          (e.prototype.asCompletionItem = function (e) {
            var t = { label: e.label };
            e.detail && (t.detail = e.detail),
              e.documentation &&
                ((t.documentation = this.asDocumentation(e.documentation)),
                (t.documentationFormat = a.string(e.documentation)
                  ? void 0
                  : e.documentation.kind)),
              e.filterText && (t.filterText = e.filterText);
            var n = this.asCompletionInsertText(e);
            if (
              (n &&
                ((t.insertText = n.text),
                (t.range = n.range),
                (t.fromEdit = n.fromEdit)),
              a.number(e.kind))
            ) {
              var r = this.asCompletionItemKind(e.kind),
                i = r[0],
                o = r[1];
              (t.kind = i), o && (t.originalItemKind = o);
            }
            return (
              e.sortText && (t.sortText = e.sortText),
              e.additionalTextEdits &&
                (t.additionalTextEdits = this.asTextEdits(
                  e.additionalTextEdits
                )),
              a.stringArray(e.commitCharacters) &&
                (t.commitCharacters = e.commitCharacters.slice()),
              e.command && (t.command = this.asCommand(e.command)),
              (!0 !== e.deprecated && !1 !== e.deprecated) ||
                (t.deprecated = e.deprecated),
              void 0 !== e.data && (t.data = e.data),
              t
            );
          }),
          (e.prototype.asCompletionItemKind = function (e) {
            return c.CompletionItemKind.Text <= e &&
              e <= c.CompletionItemKind.TypeParameter
              ? [e - 1, void 0]
              : [c.CompletionItemKind.Text, e];
          }),
          (e.prototype.asCompletionInsertText = function (e) {
            if (e.textEdit) {
              var t = this.asRange(e.textEdit.range),
                n = e.textEdit.newText;
              return {
                text:
                  e.insertTextFormat === c.InsertTextFormat.Snippet
                    ? { value: n }
                    : n,
                range: t,
                fromEdit: !0,
              };
            }
            if (e.insertText) {
              n = e.insertText;
              return {
                text:
                  e.insertTextFormat === c.InsertTextFormat.Snippet
                    ? { value: n }
                    : n,
                fromEdit: !1,
              };
            }
          }),
          (e.prototype.asDocumentLinks = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asDocumentLink(e);
            });
          }),
          (e.prototype.asDocumentLink = function (e) {
            return {
              range: this.asRange(e.range),
              url: e.target,
              data: e.data,
            };
          }),
          (e.prototype.asRange = function (e) {
            if (void 0 !== e) {
              if (null === e) return null;
              var t = this.asPosition(e.start),
                n = this.asPosition(e.end);
              return t instanceof monaco.Position &&
                n instanceof monaco.Position
                ? new monaco.Range(
                    t.lineNumber,
                    t.column,
                    n.lineNumber,
                    n.column
                  )
                : {
                    startLineNumber:
                      t && void 0 !== t.lineNumber ? t.lineNumber : void 0,
                    startColumn: t && void 0 !== t.column ? t.column : void 0,
                    endLineNumber:
                      n && void 0 !== n.lineNumber ? n.lineNumber : void 0,
                    endColumn: n && void 0 !== n.column ? n.column : void 0,
                  };
            }
          }),
          (e.prototype.asPosition = function (e) {
            if (void 0 !== e) {
              if (null === e) return null;
              var t = e.line,
                n = e.character,
                r = void 0 === t ? void 0 : t + 1,
                i = void 0 === n ? void 0 : n + 1;
              return void 0 !== r && void 0 !== i
                ? new monaco.Position(r, i)
                : { lineNumber: r, column: i };
            }
          }),
          (e.prototype.asColorInformations = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asColorInformation(e);
            });
          }),
          (e.prototype.asColorInformation = function (e) {
            return { range: this.asRange(e.range), color: e.color };
          }),
          (e.prototype.asColorPresentations = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asColorPresentation(e);
            });
          }),
          (e.prototype.asColorPresentation = function (e) {
            return {
              label: e.label,
              textEdit: this.asTextEdit(e.textEdit),
              additionalTextEdits: this.asTextEdits(e.additionalTextEdits),
            };
          }),
          (e.prototype.asFoldingRanges = function (e) {
            var t = this;
            return e
              ? e.map(function (e) {
                  return t.asFoldingRange(e);
                })
              : e;
          }),
          (e.prototype.asFoldingRange = function (e) {
            return {
              start: e.startLine + 1,
              end: e.endLine + 1,
              kind: this.asFoldingRangeKind(e.kind),
            };
          }),
          (e.prototype.asFoldingRangeKind = function (e) {
            if (e)
              switch (e) {
                case c.FoldingRangeKind.Comment:
                  return monaco.languages.FoldingRangeKind.Comment;
                case c.FoldingRangeKind.Imports:
                  return monaco.languages.FoldingRangeKind.Imports;
                case c.FoldingRangeKind.Region:
                  return monaco.languages.FoldingRangeKind.Region;
              }
          }),
          e
        );
      })();
      t.ProtocolToMonacoConverter = d;
    },
    nwKM: function (e, t, n) {
      "use strict";
      function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(n("oL6p")),
        r(n("Gz0x")),
        r(n("aSIW")),
        r(n("U5rG")),
        r(n("U+XB")),
        r(n("in9m")),
        r(n("LkUo")),
        r(n("zxs+")),
        r(n("1Y8E")),
        r(n("kjvz"));
    },
    oL6p: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("Gz0x");
      t.Disposable = r.Disposable;
      var i = (function () {
        function e() {
          this.disposables = [];
        }
        return (
          (e.prototype.dispose = function () {
            for (; 0 !== this.disposables.length; )
              this.disposables.pop().dispose();
          }),
          (e.prototype.push = function (e) {
            var t = this.disposables;
            return (
              t.push(e),
              {
                dispose: function () {
                  var n = t.indexOf(e);
                  -1 !== n && t.splice(n, 1);
                },
              }
            );
          }),
          e
        );
      })();
      t.DisposableCollection = i;
    },
    ojtU: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function (e) {
        function t(t, n) {
          return e.call(this, t, n) || this;
        }
        return r(t, e), t;
      })(n("uoVZ").DocumentLink);
      t.default = i;
    },
    orFP: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n("AL8H"),
        o = n("hC2b"),
        s = n("uoVZ"),
        a = n("BOov");
      function c(e, t) {
        return void 0 === e[t] && (e[t] = {}), e[t];
      }
      var u = (function (e) {
        function t(t) {
          return e.call(this, t, a.DocumentColorRequest.type) || this;
        }
        return (
          r(t, e),
          (t.prototype.fillClientCapabilities = function (e) {
            c(c(e, "textDocument"), "colorProvider").dynamicRegistration = !0;
          }),
          (t.prototype.initialize = function (e, t) {
            if (e.colorProvider) {
              var n = e.colorProvider,
                r = o.string(n.id) && n.id.length > 0 ? n.id : i.generateUuid(),
                s = n.documentSelector || t;
              s &&
                this.register(this.messages, {
                  id: r,
                  registerOptions: Object.assign({}, { documentSelector: s }),
                });
            }
          }),
          (t.prototype.registerLanguageProvider = function (e) {
            var t = this,
              n = this._client,
              r = function (e, r, i) {
                var o = {
                  color: e,
                  textDocument:
                    n.code2ProtocolConverter.asTextDocumentIdentifier(
                      r.document
                    ),
                  range: n.code2ProtocolConverter.asRange(r.range),
                };
                return n
                  .sendRequest(a.ColorPresentationRequest.type, o, i)
                  .then(t.asColorPresentations.bind(t), function (e) {
                    return (
                      n.logFailedRequest(a.ColorPresentationRequest.type, e),
                      Promise.resolve(null)
                    );
                  });
              },
              i = function (e, r) {
                var i = {
                  textDocument:
                    n.code2ProtocolConverter.asTextDocumentIdentifier(e),
                };
                return n
                  .sendRequest(a.DocumentColorRequest.type, i, r)
                  .then(t.asColorInformations.bind(t), function (e) {
                    return (
                      n.logFailedRequest(a.ColorPresentationRequest.type, e),
                      Promise.resolve(null)
                    );
                  });
              },
              o = n.clientOptions.middleware;
            return s.languages.registerColorProvider(e.documentSelector, {
              provideColorPresentations: function (e, t, n) {
                return o.provideColorPresentations
                  ? o.provideColorPresentations(e, t, n, r)
                  : r(e, t, n);
              },
              provideDocumentColors: function (e, t) {
                return o.provideDocumentColors
                  ? o.provideDocumentColors(e, t, i)
                  : i(e, t);
              },
            });
          }),
          (t.prototype.asColor = function (e) {
            return new s.Color(e.red, e.green, e.blue, e.alpha);
          }),
          (t.prototype.asColorInformations = function (e) {
            var t = this;
            return Array.isArray(e)
              ? e.map(function (e) {
                  return new s.ColorInformation(
                    t._client.protocol2CodeConverter.asRange(e.range),
                    t.asColor(e.color)
                  );
                })
              : [];
          }),
          (t.prototype.asColorPresentations = function (e) {
            var t = this;
            return Array.isArray(e)
              ? e.map(function (e) {
                  var n = new s.ColorPresentation(e.label);
                  return (
                    (n.additionalTextEdits =
                      t._client.protocol2CodeConverter.asTextEdits(
                        e.additionalTextEdits
                      )),
                    (n.textEdit = t._client.protocol2CodeConverter.asTextEdit(
                      e.textEdit
                    )),
                    n
                  );
                })
              : [];
          }),
          t
        );
      })(n("qRuN").TextDocumentFeature);
      t.ColorProviderFeature = u;
    },
    owkM: function (e, t, n) {
      "use strict";
      function r(e) {
        return "string" === typeof e || e instanceof String;
      }
      function i(e) {
        return "function" === typeof e;
      }
      function o(e) {
        return Array.isArray(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.boolean = function (e) {
          return !0 === e || !1 === e;
        }),
        (t.string = r),
        (t.number = function (e) {
          return "number" === typeof e || e instanceof Number;
        }),
        (t.error = function (e) {
          return e instanceof Error;
        }),
        (t.func = i),
        (t.array = o),
        (t.stringArray = function (e) {
          return (
            o(e) &&
            e.every(function (e) {
              return r(e);
            })
          );
        }),
        (t.typedArray = function (e, t) {
          return Array.isArray(e) && e.every(t);
        }),
        (t.thenable = function (e) {
          return e && i(e.then);
        });
    },
    qRuN: function (e, t, n) {
      "use strict";
      (function (e) {
        var r =
            (this && this.__extends) ||
            (function () {
              var e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                };
              return function (t, n) {
                function r() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          i =
            (this && this.__read) ||
            function (e, t) {
              var n = "function" === typeof Symbol && e[Symbol.iterator];
              if (!n) return e;
              var r,
                i,
                o = n.call(e),
                s = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                  s.push(r.value);
              } catch (a) {
                i = { error: a };
              } finally {
                try {
                  r && !r.done && (n = o.return) && n.call(o);
                } finally {
                  if (i) throw i.error;
                }
              }
              return s;
            },
          o =
            (this && this.__spread) ||
            function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(i(arguments[t]));
              return e;
            },
          s =
            (this && this.__values) ||
            function (e) {
              var t = "function" === typeof Symbol && e[Symbol.iterator],
                n = 0;
              return t
                ? t.call(e)
                : {
                    next: function () {
                      return (
                        e && n >= e.length && (e = void 0),
                        { value: e && e[n++], done: !e }
                      );
                    },
                  };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = n("uoVZ"),
          c = n("BOov"),
          u = n("xagI"),
          d = n("LB4s"),
          l = n("hC2b"),
          p = n("ixam"),
          f = n("AL8H");
        !(function (e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        })(n("BOov"));
        var m,
          g,
          h = (function () {
            function e() {}
            return (
              (e.prototype.error = function (e) {
                console.error(e);
              }),
              (e.prototype.warn = function (e) {
                console.warn(e);
              }),
              (e.prototype.info = function (e) {
                console.info(e);
              }),
              (e.prototype.log = function (e) {
                console.log(e);
              }),
              e
            );
          })();
        !(function (e) {
          (e[(e.Continue = 1)] = "Continue"),
            (e[(e.Shutdown = 2)] = "Shutdown");
        })((m = t.ErrorAction || (t.ErrorAction = {}))),
          (function (e) {
            (e[(e.DoNotRestart = 1)] = "DoNotRestart"),
              (e[(e.Restart = 2)] = "Restart");
          })((g = t.CloseAction || (t.CloseAction = {})));
        var v,
          y,
          C,
          D = (function () {
            function e(e) {
              (this.name = e), (this.restarts = []);
            }
            return (
              (e.prototype.error = function (e, t, n) {
                return n && n <= 3 ? m.Continue : m.Shutdown;
              }),
              (e.prototype.closed = function () {
                return (
                  this.restarts.push(Date.now()),
                  this.restarts.length < 5
                    ? g.Restart
                    : this.restarts[this.restarts.length - 1] -
                        this.restarts[0] <=
                      18e4
                    ? (a.window.showErrorMessage(
                        "The " +
                          this.name +
                          " server crashed 5 times in the last 3 minutes. The server will not be restarted."
                      ),
                      g.DoNotRestart)
                    : (this.restarts.shift(), g.Restart)
                );
              }),
              e
            );
          })();
        !(function (e) {
          (e[(e.Info = 1)] = "Info"),
            (e[(e.Warn = 2)] = "Warn"),
            (e[(e.Error = 3)] = "Error"),
            (e[(e.Never = 4)] = "Never");
        })((v = t.RevealOutputChannelOn || (t.RevealOutputChannelOn = {}))),
          (function (e) {
            (e[(e.Stopped = 1)] = "Stopped"), (e[(e.Running = 2)] = "Running");
          })((y = t.State || (t.State = {}))),
          (function (e) {
            (e[(e.Initial = 0)] = "Initial"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.StartFailed = 2)] = "StartFailed"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Stopping = 4)] = "Stopping"),
              (e[(e.Stopped = 5)] = "Stopped");
          })(C || (C = {}));
        var w,
          x = [
            c.SymbolKind.File,
            c.SymbolKind.Module,
            c.SymbolKind.Namespace,
            c.SymbolKind.Package,
            c.SymbolKind.Class,
            c.SymbolKind.Method,
            c.SymbolKind.Property,
            c.SymbolKind.Field,
            c.SymbolKind.Constructor,
            c.SymbolKind.Enum,
            c.SymbolKind.Interface,
            c.SymbolKind.Function,
            c.SymbolKind.Variable,
            c.SymbolKind.Constant,
            c.SymbolKind.String,
            c.SymbolKind.Number,
            c.SymbolKind.Boolean,
            c.SymbolKind.Array,
            c.SymbolKind.Object,
            c.SymbolKind.Key,
            c.SymbolKind.Null,
            c.SymbolKind.EnumMember,
            c.SymbolKind.Struct,
            c.SymbolKind.Event,
            c.SymbolKind.Operator,
            c.SymbolKind.TypeParameter,
          ],
          b = [
            c.CompletionItemKind.Text,
            c.CompletionItemKind.Method,
            c.CompletionItemKind.Function,
            c.CompletionItemKind.Constructor,
            c.CompletionItemKind.Field,
            c.CompletionItemKind.Variable,
            c.CompletionItemKind.Class,
            c.CompletionItemKind.Interface,
            c.CompletionItemKind.Module,
            c.CompletionItemKind.Property,
            c.CompletionItemKind.Unit,
            c.CompletionItemKind.Value,
            c.CompletionItemKind.Enum,
            c.CompletionItemKind.Keyword,
            c.CompletionItemKind.Snippet,
            c.CompletionItemKind.Color,
            c.CompletionItemKind.File,
            c.CompletionItemKind.Reference,
            c.CompletionItemKind.Folder,
            c.CompletionItemKind.EnumMember,
            c.CompletionItemKind.Constant,
            c.CompletionItemKind.Struct,
            c.CompletionItemKind.Event,
            c.CompletionItemKind.Operator,
            c.CompletionItemKind.TypeParameter,
          ];
        function _(e, t) {
          return void 0 === e[t] && (e[t] = {}), e[t];
        }
        !(function (e) {
          e.is = function (e) {
            var t = e;
            return (
              t &&
              l.func(t.register) &&
              l.func(t.unregister) &&
              l.func(t.dispose) &&
              void 0 !== t.messages
            );
          };
        })(w || (w = {}));
        var R = (function () {
            function e(e, t, n, r, i, o) {
              (this._client = e),
                (this._event = t),
                (this._type = n),
                (this._middleware = r),
                (this._createParams = i),
                (this._selectorFilter = o),
                (this._selectors = new Map());
            }
            return (
              (e.textDocumentFilter = function (e, t) {
                var n, r;
                try {
                  for (var i = s(e), o = i.next(); !o.done; o = i.next()) {
                    var c = o.value;
                    if (a.languages.match(c, t)) return !0;
                  }
                } catch (u) {
                  n = { error: u };
                } finally {
                  try {
                    o && !o.done && (r = i.return) && r.call(i);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return !1;
              }),
              (e.prototype.register = function (e, t) {
                t.registerOptions.documentSelector &&
                  (this._listener ||
                    (this._listener = this._event(this.callback, this)),
                  this._selectors.set(
                    t.id,
                    t.registerOptions.documentSelector
                  ));
              }),
              (e.prototype.callback = function (e) {
                var t = this;
                (this._selectorFilter &&
                  !this._selectorFilter(this._selectors.values(), e)) ||
                  (this._middleware
                    ? this._middleware(e, function (e) {
                        return t._client.sendNotification(
                          t._type,
                          t._createParams(e)
                        );
                      })
                    : this._client.sendNotification(
                        this._type,
                        this._createParams(e)
                      ),
                  this.notificationSent(e));
              }),
              (e.prototype.notificationSent = function (e) {}),
              (e.prototype.unregister = function (e) {
                this._selectors.delete(e),
                  0 === this._selectors.size &&
                    this._listener &&
                    (this._listener.dispose(), (this._listener = void 0));
              }),
              (e.prototype.dispose = function () {
                this._selectors.clear(),
                  this._listener && this._listener.dispose();
              }),
              e
            );
          })(),
          T = (function (e) {
            function t(t, n) {
              var r =
                e.call(
                  this,
                  t,
                  a.workspace.onDidOpenTextDocument,
                  c.DidOpenTextDocumentNotification.type,
                  t.clientOptions.middleware.didOpen,
                  function (e) {
                    return t.code2ProtocolConverter.asOpenTextDocumentParams(e);
                  },
                  R.textDocumentFilter
                ) || this;
              return (r._syncedDocuments = n), r;
            }
            return (
              r(t, e),
              Object.defineProperty(t.prototype, "messages", {
                get: function () {
                  return c.DidOpenTextDocumentNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "synchronization").dynamicRegistration =
                  !0;
              }),
              (t.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  n.openClose &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: { documentSelector: t },
                  });
              }),
              (t.prototype.register = function (t, n) {
                var r = this;
                if (
                  (e.prototype.register.call(this, t, n),
                  n.registerOptions.documentSelector)
                ) {
                  var i = n.registerOptions.documentSelector;
                  a.workspace.textDocuments.forEach(function (e) {
                    var t = e.uri.toString();
                    if (!r._syncedDocuments.has(t) && a.languages.match(i, e)) {
                      var n = r._client.clientOptions.middleware,
                        o = function (e) {
                          r._client.sendNotification(
                            r._type,
                            r._createParams(e)
                          );
                        };
                      n.didOpen ? n.didOpen(e, o) : o(e),
                        r._syncedDocuments.set(t, e);
                    }
                  });
                }
              }),
              (t.prototype.notificationSent = function (t) {
                e.prototype.notificationSent.call(this, t),
                  this._syncedDocuments.set(t.uri.toString(), t);
              }),
              t
            );
          })(R),
          P = (function (e) {
            function t(t, n) {
              var r =
                e.call(
                  this,
                  t,
                  a.workspace.onDidCloseTextDocument,
                  c.DidCloseTextDocumentNotification.type,
                  t.clientOptions.middleware.didClose,
                  function (e) {
                    return t.code2ProtocolConverter.asCloseTextDocumentParams(
                      e
                    );
                  },
                  R.textDocumentFilter
                ) || this;
              return (r._syncedDocuments = n), r;
            }
            return (
              r(t, e),
              Object.defineProperty(t.prototype, "messages", {
                get: function () {
                  return c.DidCloseTextDocumentNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "synchronization").dynamicRegistration =
                  !0;
              }),
              (t.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  n.openClose &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: { documentSelector: t },
                  });
              }),
              (t.prototype.notificationSent = function (t) {
                e.prototype.notificationSent.call(this, t),
                  this._syncedDocuments.delete(t.uri.toString());
              }),
              (t.prototype.unregister = function (t) {
                var n = this,
                  r = this._selectors.get(t);
                e.prototype.unregister.call(this, t);
                var i = this._selectors.values();
                this._syncedDocuments.forEach(function (e) {
                  if (a.languages.match(r, e) && !n._selectorFilter(i, e)) {
                    var t = n._client.clientOptions.middleware,
                      o = function (e) {
                        n._client.sendNotification(n._type, n._createParams(e));
                      };
                    n._syncedDocuments.delete(e.uri.toString()),
                      t.didClose ? t.didClose(e, o) : o(e);
                  }
                });
              }),
              t
            );
          })(R),
          S = (function () {
            function e(e) {
              (this._client = e),
                (this._changeData = new Map()),
                (this._forcingDelivery = !1);
            }
            return (
              Object.defineProperty(e.prototype, "messages", {
                get: function () {
                  return c.DidChangeTextDocumentNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "synchronization").dynamicRegistration =
                  !0;
              }),
              (e.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  void 0 !== n.change &&
                  n.change !== c.TextDocumentSyncKind.None &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      { documentSelector: t },
                      { syncKind: n.change }
                    ),
                  });
              }),
              (e.prototype.register = function (e, t) {
                t.registerOptions.documentSelector &&
                  (this._listener ||
                    (this._listener = a.workspace.onDidChangeTextDocument(
                      this.callback,
                      this
                    )),
                  this._changeData.set(t.id, {
                    documentSelector: t.registerOptions.documentSelector,
                    syncKind: t.registerOptions.syncKind,
                  }));
              }),
              (e.prototype.callback = function (e) {
                var t,
                  n,
                  r = this;
                if (0 !== e.contentChanges.length) {
                  var i = function (t) {
                      if (a.languages.match(t.documentSelector, e.document)) {
                        var n = o._client.clientOptions.middleware;
                        if (t.syncKind === c.TextDocumentSyncKind.Incremental) {
                          var i =
                            o._client.code2ProtocolConverter.asChangeTextDocumentParams(
                              e
                            );
                          n.didChange
                            ? n.didChange(e, function () {
                                return r._client.sendNotification(
                                  c.DidChangeTextDocumentNotification.type,
                                  i
                                );
                              })
                            : o._client.sendNotification(
                                c.DidChangeTextDocumentNotification.type,
                                i
                              );
                        } else if (t.syncKind === c.TextDocumentSyncKind.Full) {
                          var s = function (e) {
                            r._changeDelayer
                              ? (r._changeDelayer.uri !==
                                  e.document.uri.toString() &&
                                  (r.forceDelivery(),
                                  (r._changeDelayer.uri =
                                    e.document.uri.toString())),
                                r._changeDelayer.delayer.trigger(function () {
                                  r._client.sendNotification(
                                    c.DidChangeTextDocumentNotification.type,
                                    r._client.code2ProtocolConverter.asChangeTextDocumentParams(
                                      e.document
                                    )
                                  );
                                }))
                              : ((r._changeDelayer = {
                                  uri: e.document.uri.toString(),
                                  delayer: new p.Delayer(200),
                                }),
                                r._changeDelayer.delayer.trigger(function () {
                                  r._client.sendNotification(
                                    c.DidChangeTextDocumentNotification.type,
                                    r._client.code2ProtocolConverter.asChangeTextDocumentParams(
                                      e.document
                                    )
                                  );
                                }, -1));
                          };
                          n.didChange ? n.didChange(e, s) : s(e);
                        }
                      }
                    },
                    o = this;
                  try {
                    for (
                      var u = s(this._changeData.values()), d = u.next();
                      !d.done;
                      d = u.next()
                    ) {
                      i(d.value);
                    }
                  } catch (l) {
                    t = { error: l };
                  } finally {
                    try {
                      d && !d.done && (n = u.return) && n.call(u);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                }
              }),
              (e.prototype.unregister = function (e) {
                this._changeData.delete(e),
                  0 === this._changeData.size &&
                    this._listener &&
                    (this._listener.dispose(), (this._listener = void 0));
              }),
              (e.prototype.dispose = function () {
                (this._changeDelayer = void 0),
                  (this._forcingDelivery = !1),
                  this._changeData.clear(),
                  this._listener &&
                    (this._listener.dispose(), (this._listener = void 0));
              }),
              (e.prototype.forceDelivery = function () {
                if (!this._forcingDelivery && this._changeDelayer)
                  try {
                    (this._forcingDelivery = !0),
                      this._changeDelayer.delayer.forceDelivery();
                  } finally {
                    this._forcingDelivery = !1;
                  }
              }),
              e
            );
          })(),
          k = (function (e) {
            function t(t) {
              return (
                e.call(
                  this,
                  t,
                  a.workspace.onWillSaveTextDocument,
                  c.WillSaveTextDocumentNotification.type,
                  t.clientOptions.middleware.willSave,
                  function (e) {
                    return t.code2ProtocolConverter.asWillSaveTextDocumentParams(
                      e
                    );
                  },
                  function (e, t) {
                    return R.textDocumentFilter(e, t.document);
                  }
                ) || this
              );
            }
            return (
              r(t, e),
              Object.defineProperty(t.prototype, "messages", {
                get: function () {
                  return c.WillSaveTextDocumentNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "synchronization").willSave = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  n.willSave &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: { documentSelector: t },
                  });
              }),
              t
            );
          })(R),
          E = (function () {
            function e(e) {
              (this._client = e), (this._selectors = new Map());
            }
            return (
              Object.defineProperty(e.prototype, "messages", {
                get: function () {
                  return c.WillSaveTextDocumentWaitUntilRequest.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "synchronization").willSaveWaitUntil =
                  !0;
              }),
              (e.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  n.willSaveWaitUntil &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: { documentSelector: t },
                  });
              }),
              (e.prototype.register = function (e, t) {
                t.registerOptions.documentSelector &&
                  (this._listener ||
                    (this._listener = a.workspace.onWillSaveTextDocument(
                      this.callback,
                      this
                    )),
                  this._selectors.set(
                    t.id,
                    t.registerOptions.documentSelector
                  ));
              }),
              (e.prototype.callback = function (e) {
                var t = this;
                if (
                  R.textDocumentFilter(this._selectors.values(), e.document)
                ) {
                  var n = this._client.clientOptions.middleware,
                    r = function (e) {
                      return t._client
                        .sendRequest(
                          c.WillSaveTextDocumentWaitUntilRequest.type,
                          t._client.code2ProtocolConverter.asWillSaveTextDocumentParams(
                            e
                          )
                        )
                        .then(function (e) {
                          var n =
                            t._client.protocol2CodeConverter.asTextEdits(e);
                          return void 0 === n ? [] : n;
                        });
                    };
                  e.waitUntil(
                    n.willSaveWaitUntil ? n.willSaveWaitUntil(e, r) : r(e)
                  );
                }
              }),
              (e.prototype.unregister = function (e) {
                this._selectors.delete(e),
                  0 === this._selectors.size &&
                    this._listener &&
                    (this._listener.dispose(), (this._listener = void 0));
              }),
              (e.prototype.dispose = function () {
                this._selectors.clear(),
                  this._listener &&
                    (this._listener.dispose(), (this._listener = void 0));
              }),
              e
            );
          })(),
          O = (function (e) {
            function t(t) {
              var n =
                e.call(
                  this,
                  t,
                  a.workspace.onDidSaveTextDocument,
                  c.DidSaveTextDocumentNotification.type,
                  t.clientOptions.middleware.didSave,
                  function (e) {
                    return t.code2ProtocolConverter.asSaveTextDocumentParams(
                      e,
                      n._includeText
                    );
                  },
                  R.textDocumentFilter
                ) || this;
              return n;
            }
            return (
              r(t, e),
              Object.defineProperty(t.prototype, "messages", {
                get: function () {
                  return c.DidSaveTextDocumentNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "synchronization").didSave = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  n.save &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      { documentSelector: t },
                      { includeText: !!n.save.includeText }
                    ),
                  });
              }),
              (t.prototype.register = function (t, n) {
                (this._includeText = !!n.registerOptions.includeText),
                  e.prototype.register.call(this, t, n);
              }),
              t
            );
          })(R),
          M = (function () {
            function e(e, t) {
              (this._client = e),
                (this._notifyFileEvent = t),
                (this._watchers = new Map());
            }
            return (
              Object.defineProperty(e.prototype, "messages", {
                get: function () {
                  return c.DidChangeWatchedFilesNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.fillClientCapabilities = function (e) {
                _(
                  _(e, "workspace"),
                  "didChangeWatchedFiles"
                ).dynamicRegistration = !0;
              }),
              (e.prototype.initialize = function (e, t) {}),
              (e.prototype.register = function (e, t) {
                var n, r;
                if (Array.isArray(t.registerOptions.watchers)) {
                  var i = [];
                  try {
                    for (
                      var o = s(t.registerOptions.watchers), u = o.next();
                      !u.done;
                      u = o.next()
                    ) {
                      var d = u.value;
                      if (l.string(d.globPattern)) {
                        var p = !0,
                          f = !0,
                          m = !0;
                        void 0 !== d.kind &&
                          null !== d.kind &&
                          ((p = 0 !== (d.kind & c.WatchKind.Create)),
                          (f = 0 != (d.kind & c.WatchKind.Change)),
                          (m = 0 != (d.kind & c.WatchKind.Delete)));
                        var g = a.workspace.createFileSystemWatcher(
                          d.globPattern,
                          !p,
                          !f,
                          !m
                        );
                        this.hookListeners(g, p, f, m), i.push(g);
                      }
                    }
                  } catch (h) {
                    n = { error: h };
                  } finally {
                    try {
                      u && !u.done && (r = o.return) && r.call(o);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  this._watchers.set(t.id, i);
                }
              }),
              (e.prototype.registerRaw = function (e, t) {
                var n,
                  r,
                  i = [];
                try {
                  for (var o = s(t), a = o.next(); !a.done; a = o.next()) {
                    var c = a.value;
                    this.hookListeners(c, !0, !0, !0, i);
                  }
                } catch (u) {
                  n = { error: u };
                } finally {
                  try {
                    a && !a.done && (r = o.return) && r.call(o);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                this._watchers.set(e, i);
              }),
              (e.prototype.hookListeners = function (e, t, n, r, i) {
                var o = this;
                t &&
                  e.onDidCreate(
                    function (e) {
                      return o._notifyFileEvent({
                        uri: o._client.code2ProtocolConverter.asUri(e),
                        type: c.FileChangeType.Created,
                      });
                    },
                    null,
                    i
                  ),
                  n &&
                    e.onDidChange(
                      function (e) {
                        return o._notifyFileEvent({
                          uri: o._client.code2ProtocolConverter.asUri(e),
                          type: c.FileChangeType.Changed,
                        });
                      },
                      null,
                      i
                    ),
                  r &&
                    e.onDidDelete(
                      function (e) {
                        return o._notifyFileEvent({
                          uri: o._client.code2ProtocolConverter.asUri(e),
                          type: c.FileChangeType.Deleted,
                        });
                      },
                      null,
                      i
                    );
              }),
              (e.prototype.unregister = function (e) {
                var t,
                  n,
                  r = this._watchers.get(e);
                if (r)
                  try {
                    for (var i = s(r), o = i.next(); !o.done; o = i.next()) {
                      o.value.dispose();
                    }
                  } catch (a) {
                    t = { error: a };
                  } finally {
                    try {
                      o && !o.done && (n = i.return) && n.call(i);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
              }),
              (e.prototype.dispose = function () {
                this._watchers.forEach(function (e) {
                  var t, n;
                  try {
                    for (var r = s(e), i = r.next(); !i.done; i = r.next()) {
                      i.value.dispose();
                    }
                  } catch (o) {
                    t = { error: o };
                  } finally {
                    try {
                      i && !i.done && (n = r.return) && n.call(r);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                }),
                  this._watchers.clear();
              }),
              e
            );
          })(),
          F = (function () {
            function e(e, t) {
              (this._client = e),
                (this._message = t),
                (this._providers = new Map());
            }
            return (
              Object.defineProperty(e.prototype, "messages", {
                get: function () {
                  return this._message;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.register = function (e, t) {
                if (e.method !== this.messages.method)
                  throw new Error(
                    "Register called on wrong feature. Requested " +
                      e.method +
                      " but reached feature " +
                      this.messages.method
                  );
                if (t.registerOptions.documentSelector) {
                  var n = this.registerLanguageProvider(t.registerOptions);
                  n && this._providers.set(t.id, n);
                }
              }),
              (e.prototype.unregister = function (e) {
                var t = this._providers.get(e);
                t && t.dispose();
              }),
              (e.prototype.dispose = function () {
                this._providers.forEach(function (e) {
                  e.dispose();
                }),
                  this._providers.clear();
              }),
              e
            );
          })();
        t.TextDocumentFeature = F;
        var q = (function () {
            function e(e, t) {
              (this._client = e),
                (this._message = t),
                (this._providers = new Map());
            }
            return (
              Object.defineProperty(e.prototype, "messages", {
                get: function () {
                  return this._message;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.register = function (e, t) {
                if (e.method !== this.messages.method)
                  throw new Error(
                    "Register called on wron feature. Requested " +
                      e.method +
                      " but reached feature " +
                      this.messages.method
                  );
                var n = this.registerLanguageProvider(t.registerOptions);
                n && this._providers.set(t.id, n);
              }),
              (e.prototype.unregister = function (e) {
                var t = this._providers.get(e);
                t && t.dispose();
              }),
              (e.prototype.dispose = function () {
                this._providers.forEach(function (e) {
                  e.dispose();
                }),
                  this._providers.clear();
              }),
              e
            );
          })(),
          I = (function (e) {
            function t(t) {
              return e.call(this, t, c.CompletionRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = _(_(e, "textDocument"), "completion");
                (t.dynamicRegistration = !0),
                  (t.contextSupport = !0),
                  (t.completionItem = {
                    snippetSupport: !0,
                    commitCharactersSupport: !0,
                    documentationFormat: [
                      c.MarkupKind.Markdown,
                      c.MarkupKind.PlainText,
                    ],
                    deprecatedSupport: !0,
                    preselectSupport: !0,
                  }),
                  (t.completionItemKind = { valueSet: b });
              }),
              (t.prototype.initialize = function (e, t) {
                e.completionProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      { documentSelector: t },
                      e.completionProvider
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = e.triggerCharacters || [],
                  n = this._client,
                  r = function (e, t, r, i) {
                    return n
                      .sendRequest(
                        c.CompletionRequest.type,
                        n.code2ProtocolConverter.asCompletionParams(e, t, r),
                        i
                      )
                      .then(
                        n.protocol2CodeConverter.asCompletionResult,
                        function (e) {
                          return (
                            n.logFailedRequest(c.CompletionRequest.type, e),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  i = function (e, t) {
                    return n
                      .sendRequest(
                        c.CompletionResolveRequest.type,
                        n.code2ProtocolConverter.asCompletionItem(e),
                        t
                      )
                      .then(
                        n.protocol2CodeConverter.asCompletionItem,
                        function (t) {
                          return (
                            n.logFailedRequest(
                              c.CompletionResolveRequest.type,
                              t
                            ),
                            Promise.resolve(e)
                          );
                        }
                      );
                  },
                  s = this._client.clientOptions.middleware;
                return a.languages.registerCompletionItemProvider.apply(
                  a.languages,
                  o(
                    [
                      e.documentSelector,
                      {
                        provideCompletionItems: function (e, t, n, i) {
                          return s.provideCompletionItem
                            ? s.provideCompletionItem(e, t, i, n, r)
                            : r(e, t, i, n);
                        },
                        resolveCompletionItem: e.resolveProvider
                          ? function (e, t) {
                              return s.resolveCompletionItem
                                ? s.resolveCompletionItem(e, t, i)
                                : i(e, t);
                            }
                          : void 0,
                      },
                    ],
                    t
                  )
                );
              }),
              t
            );
          })(F),
          N = (function (e) {
            function t(t) {
              return e.call(this, t, c.HoverRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = _(_(e, "textDocument"), "hover");
                (t.dynamicRegistration = !0),
                  (t.contentFormat = [
                    c.MarkupKind.Markdown,
                    c.MarkupKind.PlainText,
                  ]);
              }),
              (t.prototype.initialize = function (e, t) {
                e.hoverProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign({}, { documentSelector: t }),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, r) {
                    return t
                      .sendRequest(
                        c.HoverRequest.type,
                        t.code2ProtocolConverter.asTextDocumentPositionParams(
                          e,
                          n
                        ),
                        r
                      )
                      .then(t.protocol2CodeConverter.asHover, function (e) {
                        return (
                          t.logFailedRequest(c.HoverRequest.type, e),
                          Promise.resolve(null)
                        );
                      });
                  },
                  r = t.clientOptions.middleware;
                return a.languages.registerHoverProvider(e.documentSelector, {
                  provideHover: function (e, t, i) {
                    return r.provideHover
                      ? r.provideHover(e, t, i, n)
                      : n(e, t, i);
                  },
                });
              }),
              t
            );
          })(F),
          L = (function (e) {
            function t(t) {
              return e.call(this, t, c.SignatureHelpRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = _(_(e, "textDocument"), "signatureHelp");
                (t.dynamicRegistration = !0),
                  (t.signatureInformation = {
                    documentationFormat: [
                      c.MarkupKind.Markdown,
                      c.MarkupKind.PlainText,
                    ],
                  });
              }),
              (t.prototype.initialize = function (e, t) {
                e.signatureHelpProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      { documentSelector: t },
                      e.signatureHelpProvider
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, r) {
                    return t
                      .sendRequest(
                        c.SignatureHelpRequest.type,
                        t.code2ProtocolConverter.asTextDocumentPositionParams(
                          e,
                          n
                        ),
                        r
                      )
                      .then(
                        t.protocol2CodeConverter.asSignatureHelp,
                        function (e) {
                          return (
                            t.logFailedRequest(c.SignatureHelpRequest.type, e),
                            Promise.resolve(null)
                          );
                        }
                      );
                  },
                  r = t.clientOptions.middleware,
                  i = e.triggerCharacters || [];
                return a.languages.registerSignatureHelpProvider.apply(
                  a.languages,
                  o(
                    [
                      e.documentSelector,
                      {
                        provideSignatureHelp: function (e, t, i) {
                          return r.provideSignatureHelp
                            ? r.provideSignatureHelp(e, t, i, n)
                            : n(e, t, i);
                        },
                      },
                    ],
                    i
                  )
                );
              }),
              t
            );
          })(F),
          K = (function (e) {
            function t(t) {
              return e.call(this, t, c.DefinitionRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "definition").dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.definitionProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign({}, { documentSelector: t }),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, r) {
                    return t
                      .sendRequest(
                        c.DefinitionRequest.type,
                        t.code2ProtocolConverter.asTextDocumentPositionParams(
                          e,
                          n
                        ),
                        r
                      )
                      .then(
                        t.protocol2CodeConverter.asDefinitionResult,
                        function (e) {
                          return (
                            t.logFailedRequest(c.DefinitionRequest.type, e),
                            Promise.resolve(null)
                          );
                        }
                      );
                  },
                  r = t.clientOptions.middleware;
                return a.languages.registerDefinitionProvider(
                  e.documentSelector,
                  {
                    provideDefinition: function (e, t, i) {
                      return r.provideDefinition
                        ? r.provideDefinition(e, t, i, n)
                        : n(e, t, i);
                    },
                  }
                );
              }),
              t
            );
          })(F),
          j = (function (e) {
            function t(t) {
              return e.call(this, t, c.ReferencesRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "references").dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.referencesProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign({}, { documentSelector: t }),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, r, i) {
                    return t
                      .sendRequest(
                        c.ReferencesRequest.type,
                        t.code2ProtocolConverter.asReferenceParams(e, n, r),
                        i
                      )
                      .then(
                        t.protocol2CodeConverter.asReferences,
                        function (e) {
                          return (
                            t.logFailedRequest(c.ReferencesRequest.type, e),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  r = t.clientOptions.middleware;
                return a.languages.registerReferenceProvider(
                  e.documentSelector,
                  {
                    provideReferences: function (e, t, i, o) {
                      return r.provideReferences
                        ? r.provideReferences(e, t, i, o, n)
                        : n(e, t, i, o);
                    },
                  }
                );
              }),
              t
            );
          })(F),
          A = (function (e) {
            function t(t) {
              return e.call(this, t, c.DocumentHighlightRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                _(
                  _(e, "textDocument"),
                  "documentHighlight"
                ).dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentHighlightProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign({}, { documentSelector: t }),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, r) {
                    return t
                      .sendRequest(
                        c.DocumentHighlightRequest.type,
                        t.code2ProtocolConverter.asTextDocumentPositionParams(
                          e,
                          n
                        ),
                        r
                      )
                      .then(
                        t.protocol2CodeConverter.asDocumentHighlights,
                        function (e) {
                          return (
                            t.logFailedRequest(
                              c.DocumentHighlightRequest.type,
                              e
                            ),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  r = t.clientOptions.middleware;
                return a.languages.registerDocumentHighlightProvider(
                  e.documentSelector,
                  {
                    provideDocumentHighlights: function (e, t, i) {
                      return r.provideDocumentHighlights
                        ? r.provideDocumentHighlights(e, t, i, n)
                        : n(e, t, i);
                    },
                  }
                );
              }),
              t
            );
          })(F),
          W = (function (e) {
            function t(t) {
              return e.call(this, t, c.DocumentSymbolRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = _(_(e, "textDocument"), "documentSymbol");
                (t.dynamicRegistration = !0),
                  (t.symbolKind = { valueSet: x }),
                  (t.hierarchicalDocumentSymbolSupport = !0);
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentSymbolProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign({}, { documentSelector: t }),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n) {
                    return t
                      .sendRequest(
                        c.DocumentSymbolRequest.type,
                        t.code2ProtocolConverter.asDocumentSymbolParams(e),
                        n
                      )
                      .then(
                        function (e) {
                          if (null !== e) {
                            if (0 === e.length) return [];
                            var n = e[0];
                            return c.DocumentSymbol.is(n)
                              ? t.protocol2CodeConverter.asDocumentSymbols(e)
                              : t.protocol2CodeConverter.asSymbolInformations(
                                  e
                                );
                          }
                        },
                        function (e) {
                          return (
                            t.logFailedRequest(c.DocumentSymbolRequest.type, e),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  r = t.clientOptions.middleware;
                return a.languages.registerDocumentSymbolProvider(
                  e.documentSelector,
                  {
                    provideDocumentSymbols: function (e, t) {
                      return r.provideDocumentSymbols
                        ? r.provideDocumentSymbols(e, t, n)
                        : n(e, t);
                    },
                  }
                );
              }),
              t
            );
          })(F),
          H = (function (e) {
            function t(t) {
              return e.call(this, t, c.WorkspaceSymbolRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = _(_(e, "workspace"), "symbol");
                (t.dynamicRegistration = !0), (t.symbolKind = { valueSet: x });
              }),
              (t.prototype.initialize = function (e) {
                e.workspaceSymbolProvider &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: void 0,
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n) {
                    return t
                      .sendRequest(
                        c.WorkspaceSymbolRequest.type,
                        { query: e },
                        n
                      )
                      .then(
                        t.protocol2CodeConverter.asSymbolInformations,
                        function (e) {
                          return (
                            t.logFailedRequest(
                              c.WorkspaceSymbolRequest.type,
                              e
                            ),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  r = t.clientOptions.middleware;
                return a.languages.registerWorkspaceSymbolProvider({
                  provideWorkspaceSymbols: function (e, t) {
                    return r.provideWorkspaceSymbols
                      ? r.provideWorkspaceSymbols(e, t, n)
                      : n(e, t);
                  },
                });
              }),
              t
            );
          })(q),
          U = (function (e) {
            function t(t) {
              return e.call(this, t, c.CodeActionRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = _(_(e, "textDocument"), "codeAction");
                (t.dynamicRegistration = !0),
                  (t.codeActionLiteralSupport = {
                    codeActionKind: {
                      valueSet: [
                        "",
                        c.CodeActionKind.QuickFix,
                        c.CodeActionKind.Refactor,
                        c.CodeActionKind.RefactorExtract,
                        c.CodeActionKind.RefactorInline,
                        c.CodeActionKind.RefactorRewrite,
                        c.CodeActionKind.Source,
                        c.CodeActionKind.SourceOrganizeImports,
                      ],
                    },
                  });
              }),
              (t.prototype.initialize = function (e, t) {
                e.codeActionProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign({}, { documentSelector: t }),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, r, i) {
                    var o = {
                      textDocument:
                        t.code2ProtocolConverter.asTextDocumentIdentifier(e),
                      range: t.code2ProtocolConverter.asRange(n),
                      context: t.code2ProtocolConverter.asCodeActionContext(r),
                    };
                    return t.sendRequest(c.CodeActionRequest.type, o, i).then(
                      function (e) {
                        var n, r;
                        if (null !== e) {
                          var i = [];
                          try {
                            for (
                              var o = s(e), a = o.next();
                              !a.done;
                              a = o.next()
                            ) {
                              var u = a.value;
                              c.Command.is(u)
                                ? i.push(t.protocol2CodeConverter.asCommand(u))
                                : i.push(
                                    t.protocol2CodeConverter.asCodeAction(u)
                                  );
                            }
                          } catch (d) {
                            n = { error: d };
                          } finally {
                            try {
                              a && !a.done && (r = o.return) && r.call(o);
                            } finally {
                              if (n) throw n.error;
                            }
                          }
                          return i;
                        }
                      },
                      function (e) {
                        return (
                          t.logFailedRequest(c.CodeActionRequest.type, e),
                          Promise.resolve([])
                        );
                      }
                    );
                  },
                  r = t.clientOptions.middleware;
                return a.languages.registerCodeActionsProvider(
                  e.documentSelector,
                  {
                    provideCodeActions: function (e, t, i, o) {
                      return r.provideCodeActions
                        ? r.provideCodeActions(e, t, i, o, n)
                        : n(e, t, i, o);
                    },
                  }
                );
              }),
              t
            );
          })(F),
          z = (function (e) {
            function t(t) {
              return e.call(this, t, c.CodeLensRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "codeLens").dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.codeLensProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      { documentSelector: t },
                      e.codeLensProvider
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n) {
                    return t
                      .sendRequest(
                        c.CodeLensRequest.type,
                        t.code2ProtocolConverter.asCodeLensParams(e),
                        n
                      )
                      .then(
                        t.protocol2CodeConverter.asCodeLenses,
                        function (e) {
                          return (
                            t.logFailedRequest(c.CodeLensRequest.type, e),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  r = function (e, n) {
                    return t
                      .sendRequest(
                        c.CodeLensResolveRequest.type,
                        t.code2ProtocolConverter.asCodeLens(e),
                        n
                      )
                      .then(t.protocol2CodeConverter.asCodeLens, function (n) {
                        return (
                          t.logFailedRequest(c.CodeLensResolveRequest.type, n),
                          e
                        );
                      });
                  },
                  i = t.clientOptions.middleware;
                return a.languages.registerCodeLensProvider(
                  e.documentSelector,
                  {
                    provideCodeLenses: function (e, t) {
                      return i.provideCodeLenses
                        ? i.provideCodeLenses(e, t, n)
                        : n(e, t);
                    },
                    resolveCodeLens: e.resolveProvider
                      ? function (e, t) {
                          return i.resolveCodeLens
                            ? i.resolveCodeLens(e, t, r)
                            : r(e, t);
                        }
                      : void 0,
                  }
                );
              }),
              t
            );
          })(F),
          $ = (function (e) {
            function t(t) {
              return e.call(this, t, c.DocumentFormattingRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "formatting").dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentFormattingProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign({}, { documentSelector: t }),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, r) {
                    var i = {
                      textDocument:
                        t.code2ProtocolConverter.asTextDocumentIdentifier(e),
                      options: t.code2ProtocolConverter.asFormattingOptions(n),
                    };
                    return t
                      .sendRequest(c.DocumentFormattingRequest.type, i, r)
                      .then(t.protocol2CodeConverter.asTextEdits, function (e) {
                        return (
                          t.logFailedRequest(
                            c.DocumentFormattingRequest.type,
                            e
                          ),
                          Promise.resolve([])
                        );
                      });
                  },
                  r = t.clientOptions.middleware;
                return a.languages.registerDocumentFormattingEditProvider(
                  e.documentSelector,
                  {
                    provideDocumentFormattingEdits: function (e, t, i) {
                      return r.provideDocumentFormattingEdits
                        ? r.provideDocumentFormattingEdits(e, t, i, n)
                        : n(e, t, i);
                    },
                  }
                );
              }),
              t
            );
          })(F),
          J = (function (e) {
            function t(t) {
              return (
                e.call(this, t, c.DocumentRangeFormattingRequest.type) || this
              );
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "rangeFormatting").dynamicRegistration =
                  !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentRangeFormattingProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign({}, { documentSelector: t }),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, r, i) {
                    var o = {
                      textDocument:
                        t.code2ProtocolConverter.asTextDocumentIdentifier(e),
                      range: t.code2ProtocolConverter.asRange(n),
                      options: t.code2ProtocolConverter.asFormattingOptions(r),
                    };
                    return t
                      .sendRequest(c.DocumentRangeFormattingRequest.type, o, i)
                      .then(t.protocol2CodeConverter.asTextEdits, function (e) {
                        return (
                          t.logFailedRequest(
                            c.DocumentRangeFormattingRequest.type,
                            e
                          ),
                          Promise.resolve([])
                        );
                      });
                  },
                  r = t.clientOptions.middleware;
                return a.languages.registerDocumentRangeFormattingEditProvider(
                  e.documentSelector,
                  {
                    provideDocumentRangeFormattingEdits: function (e, t, i, o) {
                      return r.provideDocumentRangeFormattingEdits
                        ? r.provideDocumentRangeFormattingEdits(e, t, i, o, n)
                        : n(e, t, i, o);
                    },
                  }
                );
              }),
              t
            );
          })(F),
          V = (function (e) {
            function t(t) {
              return (
                e.call(this, t, c.DocumentOnTypeFormattingRequest.type) || this
              );
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                _(
                  _(e, "textDocument"),
                  "onTypeFormatting"
                ).dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentOnTypeFormattingProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      { documentSelector: t },
                      e.documentOnTypeFormattingProvider
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = e.moreTriggerCharacter || [],
                  r = function (e, n, r, i, o) {
                    var s = {
                      textDocument:
                        t.code2ProtocolConverter.asTextDocumentIdentifier(e),
                      position: t.code2ProtocolConverter.asPosition(n),
                      ch: r,
                      options: t.code2ProtocolConverter.asFormattingOptions(i),
                    };
                    return t
                      .sendRequest(c.DocumentOnTypeFormattingRequest.type, s, o)
                      .then(t.protocol2CodeConverter.asTextEdits, function (e) {
                        return (
                          t.logFailedRequest(
                            c.DocumentOnTypeFormattingRequest.type,
                            e
                          ),
                          Promise.resolve([])
                        );
                      });
                  },
                  i = t.clientOptions.middleware;
                return a.languages.registerOnTypeFormattingEditProvider.apply(
                  a.languages,
                  o(
                    [
                      e.documentSelector,
                      {
                        provideOnTypeFormattingEdits: function (e, t, n, o, s) {
                          return i.provideOnTypeFormattingEdits
                            ? i.provideOnTypeFormattingEdits(e, t, n, o, s, r)
                            : r(e, t, n, o, s);
                        },
                      },
                      e.firstTriggerCharacter,
                    ],
                    n
                  )
                );
              }),
              t
            );
          })(F),
          B = (function (e) {
            function t(t) {
              return e.call(this, t, c.RenameRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "rename").dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.renameProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign({}, { documentSelector: t }),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, r, i) {
                    var o = {
                      textDocument:
                        t.code2ProtocolConverter.asTextDocumentIdentifier(e),
                      position: t.code2ProtocolConverter.asPosition(n),
                      newName: r,
                    };
                    return t
                      .sendRequest(c.RenameRequest.type, o, i)
                      .then(
                        t.protocol2CodeConverter.asWorkspaceEdit,
                        function (e) {
                          return (
                            t.logFailedRequest(c.RenameRequest.type, e),
                            Promise.reject(new Error(e.message))
                          );
                        }
                      );
                  },
                  r = t.clientOptions.middleware;
                return a.languages.registerRenameProvider(e.documentSelector, {
                  provideRenameEdits: function (e, t, i, o) {
                    return r.provideRenameEdits
                      ? r.provideRenameEdits(e, t, i, o, n)
                      : n(e, t, i, o);
                  },
                });
              }),
              t
            );
          })(F),
          G = (function (e) {
            function t(t) {
              return e.call(this, t, c.DocumentLinkRequest.type) || this;
            }
            return (
              r(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                _(_(e, "textDocument"), "documentLink").dynamicRegistration =
                  !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentLinkProvider &&
                  t &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      { documentSelector: t },
                      e.documentLinkProvider
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n) {
                    return t
                      .sendRequest(
                        c.DocumentLinkRequest.type,
                        t.code2ProtocolConverter.asDocumentLinkParams(e),
                        n
                      )
                      .then(
                        t.protocol2CodeConverter.asDocumentLinks,
                        function (e) {
                          t.logFailedRequest(c.DocumentLinkRequest.type, e),
                            Promise.resolve(new Error(e.message));
                        }
                      );
                  },
                  r = function (e, n) {
                    return t
                      .sendRequest(
                        c.DocumentLinkResolveRequest.type,
                        t.code2ProtocolConverter.asDocumentLink(e),
                        n
                      )
                      .then(
                        t.protocol2CodeConverter.asDocumentLink,
                        function (e) {
                          t.logFailedRequest(
                            c.DocumentLinkResolveRequest.type,
                            e
                          ),
                            Promise.resolve(new Error(e.message));
                        }
                      );
                  },
                  i = t.clientOptions.middleware;
                return a.languages.registerDocumentLinkProvider(
                  e.documentSelector,
                  {
                    provideDocumentLinks: function (e, t) {
                      return i.provideDocumentLinks
                        ? i.provideDocumentLinks(e, t, n)
                        : n(e, t);
                    },
                    resolveDocumentLink: e.resolveProvider
                      ? function (e, t) {
                          return i.resolveDocumentLink
                            ? i.resolveDocumentLink(e, t, r)
                            : r(e, t);
                        }
                      : void 0,
                  }
                );
              }),
              t
            );
          })(F),
          Z = (function () {
            function e(e) {
              (this._client = e), (this._listeners = new Map());
            }
            return (
              Object.defineProperty(e.prototype, "messages", {
                get: function () {
                  return c.DidChangeConfigurationNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.fillClientCapabilities = function (e) {
                _(
                  _(e, "workspace"),
                  "didChangeConfiguration"
                ).dynamicRegistration = !0;
              }),
              (e.prototype.initialize = function () {
                var e =
                  this._client.clientOptions.synchronize.configurationSection;
                void 0 !== e &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: { section: e },
                  });
              }),
              (e.prototype.register = function (e, t) {
                var n = this,
                  r = a.workspace.onDidChangeConfiguration(function (e) {
                    n.onDidChangeConfiguration(t.registerOptions.section, e);
                  });
                this._listeners.set(t.id, r),
                  void 0 !== t.registerOptions.section &&
                    this.onDidChangeConfiguration(
                      t.registerOptions.section,
                      void 0
                    );
              }),
              (e.prototype.unregister = function (e) {
                var t = this._listeners.get(e);
                t && (this._listeners.delete(e), t.dispose());
              }),
              (e.prototype.dispose = function () {
                var e, t;
                try {
                  for (
                    var n = s(this._listeners.values()), r = n.next();
                    !r.done;
                    r = n.next()
                  ) {
                    r.value.dispose();
                  }
                } catch (i) {
                  e = { error: i };
                } finally {
                  try {
                    r && !r.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this._listeners.clear();
              }),
              (e.prototype.onDidChangeConfiguration = function (e, t) {
                var n,
                  r = this;
                if (
                  void 0 !== (n = l.string(e) ? [e] : e) &&
                  void 0 !== t &&
                  !n.some(function (e) {
                    return t.affectsConfiguration(e);
                  })
                )
                  return;
                var i = function (e) {
                    void 0 !== e
                      ? r._client.sendNotification(
                          c.DidChangeConfigurationNotification.type,
                          { settings: r.extractSettingsInformation(e) }
                        )
                      : r._client.sendNotification(
                          c.DidChangeConfigurationNotification.type,
                          { settings: null }
                        );
                  },
                  o = this.getMiddleware();
                o ? o(n, i) : i(n);
              }),
              (e.prototype.extractSettingsInformation = function (e) {
                function t(e, t) {
                  for (var n = e, r = 0; r < t.length - 1; r++) {
                    var i = n[t[r]];
                    i || ((i = Object.create(null)), (n[t[r]] = i)), (n = i);
                  }
                  return n;
                }
                for (
                  var n = this._client.clientOptions.workspaceFolder
                      ? this._client.clientOptions.workspaceFolder.uri
                      : void 0,
                    r = Object.create(null),
                    i = 0;
                  i < e.length;
                  i++
                ) {
                  var o = e[i],
                    s = o.indexOf("."),
                    c = null;
                  if (
                    (c =
                      s >= 0
                        ? a.workspace
                            .getConfiguration(o.substr(0, s), n)
                            .get(o.substr(s + 1))
                        : a.workspace.getConfiguration(o, n))
                  ) {
                    var u = e[i].split(".");
                    t(r, u)[u[u.length - 1]] = c;
                  }
                }
                return r;
              }),
              (e.prototype.getMiddleware = function () {
                var e = this._client.clientOptions.middleware;
                return e.workspace && e.workspace.didChangeConfiguration
                  ? e.workspace.didChangeConfiguration
                  : void 0;
              }),
              e
            );
          })(),
          Q = (function () {
            function e(e) {
              (this._client = e), (this._commands = new Map());
            }
            return (
              Object.defineProperty(e.prototype, "messages", {
                get: function () {
                  return c.ExecuteCommandRequest.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.fillClientCapabilities = function (e) {
                _(_(e, "workspace"), "executeCommand").dynamicRegistration = !0;
              }),
              (e.prototype.initialize = function (e) {
                e.executeCommandProvider &&
                  this.register(this.messages, {
                    id: f.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      e.executeCommandProvider
                    ),
                  });
              }),
              (e.prototype.register = function (e, t) {
                var n,
                  r,
                  i = this._client;
                if (t.registerOptions.commands) {
                  var o = [],
                    u = function (e) {
                      o.push(
                        a.commands.registerCommand(e, function () {
                          for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                          var r = { command: e, arguments: t };
                          return i
                            .sendRequest(c.ExecuteCommandRequest.type, r)
                            .then(void 0, function (e) {
                              i.logFailedRequest(
                                c.ExecuteCommandRequest.type,
                                e
                              );
                            });
                        })
                      );
                    };
                  try {
                    for (
                      var d = s(t.registerOptions.commands), l = d.next();
                      !l.done;
                      l = d.next()
                    ) {
                      u(l.value);
                    }
                  } catch (p) {
                    n = { error: p };
                  } finally {
                    try {
                      l && !l.done && (r = d.return) && r.call(d);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  this._commands.set(t.id, o);
                }
              }),
              (e.prototype.unregister = function (e) {
                var t = this._commands.get(e);
                t &&
                  t.forEach(function (e) {
                    return e.dispose();
                  });
              }),
              (e.prototype.dispose = function () {
                this._commands.forEach(function (e) {
                  e.forEach(function (e) {
                    return e.dispose();
                  });
                }),
                  this._commands.clear();
              }),
              e
            );
          })();
        !(function (e) {
          e.is = function (e) {
            return (
              e && c.MessageReader.is(e.reader) && c.MessageWriter.is(e.writer)
            );
          };
        })(t.MessageTransports || (t.MessageTransports = {}));
        var X = (function () {
          function t(e, t, n) {
            var r = this;
            (this._features = []),
              (this._method2Message = new Map()),
              (this._dynamicFeatures = new Map()),
              (this._id = e),
              (this._name = t),
              (n = n || {}),
              (this._clientOptions = {
                documentSelector: n.documentSelector || [],
                synchronize: n.synchronize || {},
                diagnosticCollectionName: n.diagnosticCollectionName,
                outputChannelName: n.outputChannelName || this._name,
                revealOutputChannelOn: n.revealOutputChannelOn || v.Error,
                stdioEncoding: n.stdioEncoding || "utf8",
                initializationOptions: n.initializationOptions,
                initializationFailedHandler: n.initializationFailedHandler,
                errorHandler: n.errorHandler || new D(this._name),
                middleware: n.middleware || {},
                uriConverters: n.uriConverters,
                workspaceFolder: n.workspaceFolder,
              }),
              (this._clientOptions.synchronize =
                this._clientOptions.synchronize || {}),
              (this.state = C.Initial),
              (this._connectionPromise = void 0),
              (this._resolvedConnection = void 0),
              (this._initializeResult = void 0),
              n.outputChannel
                ? ((this._outputChannel = n.outputChannel),
                  (this._disposeOutputChannel = !1))
                : ((this._outputChannel = void 0),
                  (this._disposeOutputChannel = !0)),
              (this._listeners = void 0),
              (this._providers = void 0),
              (this._diagnostics = void 0),
              (this._fileEvents = []),
              (this._fileEventDelayer = new p.Delayer(250)),
              (this._onReady = new Promise(function (e, t) {
                r._onReadyCallbacks = { resolve: e, reject: t };
              })),
              (this._onStop = void 0),
              (this._telemetryEmitter = new c.Emitter()),
              (this._stateChangeEmitter = new c.Emitter()),
              (this._tracer = {
                log: function (e, t) {
                  r.logTrace(e, t);
                },
              }),
              (this._c2p = u.createConverter(
                n.uriConverters ? n.uriConverters.code2Protocol : void 0
              )),
              (this._p2c = d.createConverter(
                n.uriConverters ? n.uriConverters.protocol2Code : void 0
              )),
              (this._syncedDocuments = new Map()),
              this.registerBuiltinFeatures();
          }
          return (
            Object.defineProperty(t.prototype, "state", {
              get: function () {
                return this._state;
              },
              set: function (e) {
                var t = this.getPublicState();
                this._state = e;
                var n = this.getPublicState();
                n !== t &&
                  this._stateChangeEmitter.fire({ oldState: t, newState: n });
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getPublicState = function () {
              return this.state === C.Running ? y.Running : y.Stopped;
            }),
            Object.defineProperty(t.prototype, "initializeResult", {
              get: function () {
                return this._initializeResult;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.sendRequest = function (e) {
              for (var t, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
              if (!this.isConnectionActive())
                throw new Error("Language client is not ready yet");
              this.forceDocumentSync();
              try {
                return (t = this._resolvedConnection).sendRequest.apply(
                  t,
                  o([e], n)
                );
              } catch (i) {
                throw (
                  (this.error(
                    "Sending request " +
                      (l.string(e) ? e : e.method) +
                      " failed.",
                    i
                  ),
                  i)
                );
              }
            }),
            (t.prototype.onRequest = function (e, t) {
              if (!this.isConnectionActive())
                throw new Error("Language client is not ready yet");
              try {
                this._resolvedConnection.onRequest(e, t);
              } catch (n) {
                throw (
                  (this.error(
                    "Registering request handler " +
                      (l.string(e) ? e : e.method) +
                      " failed.",
                    n
                  ),
                  n)
                );
              }
            }),
            (t.prototype.sendNotification = function (e, t) {
              if (!this.isConnectionActive())
                throw new Error("Language client is not ready yet");
              this.forceDocumentSync();
              try {
                this._resolvedConnection.sendNotification(e, t);
              } catch (n) {
                throw (
                  (this.error(
                    "Sending notification " +
                      (l.string(e) ? e : e.method) +
                      " failed.",
                    n
                  ),
                  n)
                );
              }
            }),
            (t.prototype.onNotification = function (e, t) {
              if (!this.isConnectionActive())
                throw new Error("Language client is not ready yet");
              try {
                this._resolvedConnection.onNotification(e, t);
              } catch (n) {
                throw (
                  (this.error(
                    "Registering notification handler " +
                      (l.string(e) ? e : e.method) +
                      " failed.",
                    n
                  ),
                  n)
                );
              }
            }),
            Object.defineProperty(t.prototype, "clientOptions", {
              get: function () {
                return this._clientOptions;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "protocol2CodeConverter", {
              get: function () {
                return this._p2c;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "code2ProtocolConverter", {
              get: function () {
                return this._c2p;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "onTelemetry", {
              get: function () {
                return this._telemetryEmitter.event;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "onDidChangeState", {
              get: function () {
                return this._stateChangeEmitter.event;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "outputChannel", {
              get: function () {
                return (
                  this._outputChannel ||
                    (this._outputChannel = a.window.createOutputChannel(
                      this._clientOptions.outputChannelName
                        ? this._clientOptions.outputChannelName
                        : this._name
                    )),
                  this._outputChannel
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "diagnostics", {
              get: function () {
                return this._diagnostics;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.createDefaultErrorHandler = function () {
              return new D(this._name);
            }),
            Object.defineProperty(t.prototype, "trace", {
              set: function (e) {
                var t = this;
                (this._trace = e),
                  this.onReady().then(
                    function () {
                      t.resolveConnection().then(function (n) {
                        n.trace(e, t._tracer);
                      });
                    },
                    function () {}
                  );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.data2String = function (e) {
              if (e instanceof c.ResponseError) {
                var t = e;
                return (
                  "  Message: " +
                  t.message +
                  "\n  Code: " +
                  t.code +
                  " " +
                  (t.data ? "\n" + t.data.toString() : "")
                );
              }
              return e instanceof Error
                ? l.string(e.stack)
                  ? e.stack
                  : e.message
                : l.string(e)
                ? e
                : e.toString();
            }),
            (t.prototype.info = function (e, t) {
              this.outputChannel.appendLine(
                "[Info  - " + new Date().toLocaleTimeString() + "] " + e
              ),
                t && this.outputChannel.appendLine(this.data2String(t)),
                this._clientOptions.revealOutputChannelOn <= v.Info &&
                  this.outputChannel.show(!0);
            }),
            (t.prototype.warn = function (e, t) {
              this.outputChannel.appendLine(
                "[Warn  - " + new Date().toLocaleTimeString() + "] " + e
              ),
                t && this.outputChannel.appendLine(this.data2String(t)),
                this._clientOptions.revealOutputChannelOn <= v.Warn &&
                  this.outputChannel.show(!0);
            }),
            (t.prototype.error = function (e, t) {
              this.outputChannel.appendLine(
                "[Error - " + new Date().toLocaleTimeString() + "] " + e
              ),
                t && this.outputChannel.appendLine(this.data2String(t)),
                this._clientOptions.revealOutputChannelOn <= v.Error &&
                  this.outputChannel.show(!0);
            }),
            (t.prototype.logTrace = function (e, t) {
              this.outputChannel.appendLine(
                "[Trace - " + new Date().toLocaleTimeString() + "] " + e
              ),
                t && this.outputChannel.appendLine(this.data2String(t));
            }),
            (t.prototype.needsStart = function () {
              return (
                this.state === C.Initial ||
                this.state === C.Stopping ||
                this.state === C.Stopped
              );
            }),
            (t.prototype.needsStop = function () {
              return this.state === C.Starting || this.state === C.Running;
            }),
            (t.prototype.onReady = function () {
              return this._onReady;
            }),
            (t.prototype.isConnectionActive = function () {
              return this.state === C.Running && !!this._resolvedConnection;
            }),
            (t.prototype.start = function () {
              var e = this;
              return (
                (this._listeners = []),
                (this._providers = []),
                this._diagnostics ||
                  (this._diagnostics = this._clientOptions
                    .diagnosticCollectionName
                    ? a.languages.createDiagnosticCollection(
                        this._clientOptions.diagnosticCollectionName
                      )
                    : a.languages.createDiagnosticCollection()),
                (this.state = C.Starting),
                this.resolveConnection()
                  .then(function (t) {
                    return (
                      t.onLogMessage(function (t) {
                        switch (t.type) {
                          case c.MessageType.Error:
                            e.error(t.message);
                            break;
                          case c.MessageType.Warning:
                            e.warn(t.message);
                            break;
                          case c.MessageType.Info:
                            e.info(t.message);
                            break;
                          default:
                            e.outputChannel.appendLine(t.message);
                        }
                      }),
                      t.onShowMessage(function (e) {
                        switch (e.type) {
                          case c.MessageType.Error:
                            a.window.showErrorMessage(e.message);
                            break;
                          case c.MessageType.Warning:
                            a.window.showWarningMessage(e.message);
                            break;
                          case c.MessageType.Info:
                            a.window.showInformationMessage(e.message);
                            break;
                          default:
                            a.window.showInformationMessage(e.message);
                        }
                      }),
                      t.onRequest(c.ShowMessageRequest.type, function (e) {
                        var t;
                        switch (e.type) {
                          case c.MessageType.Error:
                            t = a.window.showErrorMessage;
                            break;
                          case c.MessageType.Warning:
                            t = a.window.showWarningMessage;
                            break;
                          case c.MessageType.Info:
                            t = a.window.showInformationMessage;
                            break;
                          default:
                            t = a.window.showInformationMessage;
                        }
                        var n = e.actions || [];
                        return t.apply(void 0, o([e.message], n));
                      }),
                      t.onTelemetry(function (t) {
                        e._telemetryEmitter.fire(t);
                      }),
                      t.listen(),
                      e.initialize(t)
                    );
                  })
                  .then(void 0, function (t) {
                    (e.state = C.StartFailed),
                      e._onReadyCallbacks.reject(t),
                      e.error("Starting client failed", t),
                      a.window.showErrorMessage(
                        "Couldn't start client " + e._name
                      );
                  }),
                new a.Disposable(function () {
                  e.needsStop() && e.stop();
                })
              );
            }),
            (t.prototype.resolveConnection = function () {
              return (
                this._connectionPromise ||
                  (this._connectionPromise = this.createConnection()),
                this._connectionPromise
              );
            }),
            (t.prototype.initialize = function (t) {
              var n = this;
              this.refreshTrace(t, !1);
              var r = this._clientOptions.initializationOptions,
                i = this._clientOptions.workspaceFolder
                  ? this._clientOptions.workspaceFolder.uri.fsPath
                  : this._clientGetRootPath(),
                o = {
                  processId: e.pid,
                  rootPath: i || null,
                  rootUri: i ? this._c2p.asUri(a.Uri.file(i)) : null,
                  capabilities: this.computeClientCapabilities(),
                  initializationOptions: l.func(r) ? r() : r,
                  trace: c.Trace.toString(this._trace),
                  workspaceFolders: null,
                };
              return (
                this.fillInitializeParams(o),
                t
                  .initialize(o)
                  .then(function (e) {
                    (n._resolvedConnection = t),
                      (n._initializeResult = e),
                      (n.state = C.Running);
                    var r = void 0;
                    return (
                      l.number(e.capabilities.textDocumentSync) &&
                      e.capabilities.textDocumentSync !==
                        c.TextDocumentSyncKind.None
                        ? (r = {
                            openClose: !0,
                            change: e.capabilities.textDocumentSync,
                            save: { includeText: !1 },
                          })
                        : void 0 !== e.capabilities.textDocumentSync &&
                          null !== e.capabilities.textDocumentSync &&
                          (r = e.capabilities.textDocumentSync),
                      (n._capabilities = Object.assign({}, e.capabilities, {
                        resolvedTextDocumentSync: r,
                      })),
                      t.onDiagnostics(function (e) {
                        return n.handleDiagnostics(e);
                      }),
                      t.onRequest(c.RegistrationRequest.type, function (e) {
                        return n.handleRegistrationRequest(e);
                      }),
                      t.onRequest("client/registerFeature", function (e) {
                        return n.handleRegistrationRequest(e);
                      }),
                      t.onRequest(c.UnregistrationRequest.type, function (e) {
                        return n.handleUnregistrationRequest(e);
                      }),
                      t.onRequest("client/unregisterFeature", function (e) {
                        return n.handleUnregistrationRequest(e);
                      }),
                      t.onRequest(
                        c.ApplyWorkspaceEditRequest.type,
                        function (e) {
                          return n.handleApplyWorkspaceEdit(e);
                        }
                      ),
                      t.sendNotification(c.InitializedNotification.type, {}),
                      n.hookFileEvents(t),
                      n.hookConfigurationChanged(t),
                      n.initializeFeatures(t),
                      n._onReadyCallbacks.resolve(),
                      e
                    );
                  })
                  .then(void 0, function (e) {
                    n._clientOptions.initializationFailedHandler
                      ? n._clientOptions.initializationFailedHandler(e)
                        ? n.initialize(t)
                        : (n.stop(), n._onReadyCallbacks.reject(e))
                      : e instanceof c.ResponseError && e.data && e.data.retry
                      ? a.window
                          .showErrorMessage(e.message, {
                            title: "Retry",
                            id: "retry",
                          })
                          .then(function (r) {
                            r && "retry" === r.id
                              ? n.initialize(t)
                              : (n.stop(), n._onReadyCallbacks.reject(e));
                          })
                      : (e && e.message && a.window.showErrorMessage(e.message),
                        n.error("Server initialization failed.", e),
                        n.stop(),
                        n._onReadyCallbacks.reject(e));
                  })
              );
            }),
            (t.prototype._clientGetRootPath = function () {
              var e = a.workspace.workspaceFolders;
              if (e && 0 !== e.length) {
                var t = e[0];
                return "file" === t.uri.scheme ? t.uri.fsPath : void 0;
              }
            }),
            (t.prototype.stop = function () {
              var e = this;
              return (
                (this._initializeResult = void 0),
                this._connectionPromise
                  ? this.state === C.Stopping && this._onStop
                    ? this._onStop
                    : ((this.state = C.Stopping),
                      this.cleanUp(),
                      (this._onStop = this.resolveConnection().then(function (
                        t
                      ) {
                        return t.shutdown().then(function () {
                          t.exit(),
                            t.dispose(),
                            (e.state = C.Stopped),
                            (e._onStop = void 0),
                            (e._connectionPromise = void 0),
                            (e._resolvedConnection = void 0);
                        });
                      })))
                  : ((this.state = C.Stopped), Promise.resolve())
              );
            }),
            (t.prototype.cleanUp = function (e, t) {
              var n, r;
              void 0 === e && (e = !0),
                void 0 === t && (t = !0),
                this._listeners &&
                  (this._listeners.forEach(function (e) {
                    return e.dispose();
                  }),
                  (this._listeners = void 0)),
                this._providers &&
                  (this._providers.forEach(function (e) {
                    return e.dispose();
                  }),
                  (this._providers = void 0)),
                this._syncedDocuments && this._syncedDocuments.clear();
              try {
                for (
                  var i = s(this._dynamicFeatures.values()), o = i.next();
                  !o.done;
                  o = i.next()
                ) {
                  o.value.dispose();
                }
              } catch (a) {
                n = { error: a };
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              e &&
                this._outputChannel &&
                this._disposeOutputChannel &&
                (this._outputChannel.dispose(), (this._outputChannel = void 0)),
                t &&
                  this._diagnostics &&
                  (this._diagnostics.dispose(), (this._diagnostics = void 0));
            }),
            (t.prototype.notifyFileEvent = function (e) {
              var t = this;
              this._fileEvents.push(e),
                this._fileEventDelayer.trigger(function () {
                  t.onReady().then(
                    function () {
                      t.resolveConnection().then(function (e) {
                        t.isConnectionActive() &&
                          e.didChangeWatchedFiles({ changes: t._fileEvents }),
                          (t._fileEvents = []);
                      });
                    },
                    function (e) {
                      t.error("Notify file events failed.", e);
                    }
                  );
                });
            }),
            (t.prototype.forceDocumentSync = function () {
              this._dynamicFeatures
                .get(c.DidChangeTextDocumentNotification.type.method)
                .forceDelivery();
            }),
            (t.prototype.handleDiagnostics = function (e) {
              var t = this;
              if (this._diagnostics) {
                var n = this._p2c.asUri(e.uri),
                  r = this._p2c.asDiagnostics(e.diagnostics),
                  i = this.clientOptions.middleware.handleDiagnostics;
                i
                  ? i(n, r, function (e, n) {
                      return t.setDiagnostics(e, n);
                    })
                  : this.setDiagnostics(n, r);
              }
            }),
            (t.prototype.setDiagnostics = function (e, t) {
              this._diagnostics && this._diagnostics.set(e, t);
            }),
            (t.prototype.createConnection = function () {
              var e = this,
                t = function (t, n, r) {
                  e.handleConnectionError(t, n, r);
                },
                n = function () {
                  e.handleConnectionClosed();
                };
              return this.createMessageTransports(
                this._clientOptions.stdioEncoding || "utf8"
              ).then(function (e) {
                return (function (e, t, n, r) {
                  var i = new h(),
                    s = c.createProtocolConnection(e, t, i);
                  return (
                    s.onError(function (e) {
                      n(e[0], e[1], e[2]);
                    }),
                    s.onClose(r),
                    {
                      listen: function () {
                        return s.listen();
                      },
                      sendRequest: function (e) {
                        for (var t = [], n = 1; n < arguments.length; n++)
                          t[n - 1] = arguments[n];
                        return s.sendRequest.apply(
                          s,
                          o([l.string(e) ? e : e.method], t)
                        );
                      },
                      onRequest: function (e, t) {
                        return s.onRequest(l.string(e) ? e : e.method, t);
                      },
                      sendNotification: function (e, t) {
                        return s.sendNotification(
                          l.string(e) ? e : e.method,
                          t
                        );
                      },
                      onNotification: function (e, t) {
                        return s.onNotification(l.string(e) ? e : e.method, t);
                      },
                      trace: function (e, t, n) {
                        return void 0 === n && (n = !1), s.trace(e, t, n);
                      },
                      initialize: function (e) {
                        return s.sendRequest(c.InitializeRequest.type, e);
                      },
                      shutdown: function () {
                        return s.sendRequest(c.ShutdownRequest.type, void 0);
                      },
                      exit: function () {
                        return s.sendNotification(c.ExitNotification.type);
                      },
                      onLogMessage: function (e) {
                        return s.onNotification(
                          c.LogMessageNotification.type,
                          e
                        );
                      },
                      onShowMessage: function (e) {
                        return s.onNotification(
                          c.ShowMessageNotification.type,
                          e
                        );
                      },
                      onTelemetry: function (e) {
                        return s.onNotification(
                          c.TelemetryEventNotification.type,
                          e
                        );
                      },
                      didChangeConfiguration: function (e) {
                        return s.sendNotification(
                          c.DidChangeConfigurationNotification.type,
                          e
                        );
                      },
                      didChangeWatchedFiles: function (e) {
                        return s.sendNotification(
                          c.DidChangeWatchedFilesNotification.type,
                          e
                        );
                      },
                      didOpenTextDocument: function (e) {
                        return s.sendNotification(
                          c.DidOpenTextDocumentNotification.type,
                          e
                        );
                      },
                      didChangeTextDocument: function (e) {
                        return s.sendNotification(
                          c.DidChangeTextDocumentNotification.type,
                          e
                        );
                      },
                      didCloseTextDocument: function (e) {
                        return s.sendNotification(
                          c.DidCloseTextDocumentNotification.type,
                          e
                        );
                      },
                      didSaveTextDocument: function (e) {
                        return s.sendNotification(
                          c.DidSaveTextDocumentNotification.type,
                          e
                        );
                      },
                      onDiagnostics: function (e) {
                        return s.onNotification(
                          c.PublishDiagnosticsNotification.type,
                          e
                        );
                      },
                      dispose: function () {
                        return s.dispose();
                      },
                    }
                  );
                })(e.reader, e.writer, t, n);
              });
            }),
            (t.prototype.handleConnectionClosed = function () {
              if (this.state !== C.Stopping && this.state !== C.Stopped) {
                try {
                  this._resolvedConnection &&
                    this._resolvedConnection.dispose();
                } catch (t) {}
                var e = g.DoNotRestart;
                try {
                  e = this._clientOptions.errorHandler.closed();
                } catch (t) {}
                (this._connectionPromise = void 0),
                  (this._resolvedConnection = void 0),
                  e === g.DoNotRestart
                    ? (this.error(
                        "Connection to server got closed. Server will not be restarted."
                      ),
                      (this.state = C.Stopped),
                      this.cleanUp(!1, !0))
                    : e === g.Restart &&
                      (this.info(
                        "Connection to server got closed. Server will restart."
                      ),
                      this.cleanUp(!1, !1),
                      (this.state = C.Initial),
                      this.start());
              }
            }),
            (t.prototype.handleConnectionError = function (e, t, n) {
              this._clientOptions.errorHandler.error(e, t, n) === m.Shutdown &&
                (this.error(
                  "Connection to server is erroring. Shutting down server."
                ),
                this.stop());
            }),
            (t.prototype.hookConfigurationChanged = function (e) {
              var t = this;
              a.workspace.onDidChangeConfiguration(function () {
                t.refreshTrace(e, !0);
              });
            }),
            (t.prototype.refreshTrace = function (e, t) {
              void 0 === t && (t = !1);
              var n = a.workspace.getConfiguration(this._id),
                r = c.Trace.Off;
              n && (r = c.Trace.fromString(n.get("trace.server", "off"))),
                (this._trace = r),
                e.trace(this._trace, this._tracer, t);
            }),
            (t.prototype.hookFileEvents = function (e) {
              var t,
                n = this._clientOptions.synchronize.fileEvents;
              n &&
                (t = l.array(n) ? n : [n]) &&
                this._dynamicFeatures
                  .get(c.DidChangeWatchedFilesNotification.type.method)
                  .registerRaw(f.generateUuid(), t);
            }),
            (t.prototype.registerFeatures = function (e) {
              var t, n;
              try {
                for (var r = s(e), i = r.next(); !i.done; i = r.next()) {
                  var o = i.value;
                  this.registerFeature(o);
                }
              } catch (a) {
                t = { error: a };
              } finally {
                try {
                  i && !i.done && (n = r.return) && n.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (t.prototype.registerFeature = function (e) {
              var t, n;
              if ((this._features.push(e), w.is(e))) {
                var r = e.messages;
                if (Array.isArray(r))
                  try {
                    for (var i = s(r), o = i.next(); !o.done; o = i.next()) {
                      var a = o.value;
                      this._method2Message.set(a.method, a),
                        this._dynamicFeatures.set(a.method, e);
                    }
                  } catch (c) {
                    t = { error: c };
                  } finally {
                    try {
                      o && !o.done && (n = i.return) && n.call(i);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                else
                  this._method2Message.set(r.method, r),
                    this._dynamicFeatures.set(r.method, e);
              }
            }),
            (t.prototype.registerBuiltinFeatures = function () {
              var e = this;
              this.registerFeature(new Z(this)),
                this.registerFeature(new T(this, this._syncedDocuments)),
                this.registerFeature(new S(this)),
                this.registerFeature(new k(this)),
                this.registerFeature(new E(this)),
                this.registerFeature(new O(this)),
                this.registerFeature(new P(this, this._syncedDocuments)),
                this.registerFeature(
                  new M(this, function (t) {
                    return e.notifyFileEvent(t);
                  })
                ),
                this.registerFeature(new I(this)),
                this.registerFeature(new N(this)),
                this.registerFeature(new L(this)),
                this.registerFeature(new K(this)),
                this.registerFeature(new j(this)),
                this.registerFeature(new A(this)),
                this.registerFeature(new W(this)),
                this.registerFeature(new H(this)),
                this.registerFeature(new U(this)),
                this.registerFeature(new z(this)),
                this.registerFeature(new $(this)),
                this.registerFeature(new J(this)),
                this.registerFeature(new V(this)),
                this.registerFeature(new B(this)),
                this.registerFeature(new G(this)),
                this.registerFeature(new Q(this));
            }),
            (t.prototype.fillInitializeParams = function (e) {
              var t, n;
              try {
                for (
                  var r = s(this._features), i = r.next();
                  !i.done;
                  i = r.next()
                ) {
                  var o = i.value;
                  l.func(o.fillInitializeParams) && o.fillInitializeParams(e);
                }
              } catch (a) {
                t = { error: a };
              } finally {
                try {
                  i && !i.done && (n = r.return) && n.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (t.prototype.computeClientCapabilities = function () {
              var e,
                t,
                n = {};
              (_(n, "workspace").applyEdit = !0),
                (_(_(n, "workspace"), "workspaceEdit").documentChanges = !0),
                (_(
                  _(n, "textDocument"),
                  "publishDiagnostics"
                ).relatedInformation = !0);
              try {
                for (
                  var r = s(this._features), i = r.next();
                  !i.done;
                  i = r.next()
                ) {
                  i.value.fillClientCapabilities(n);
                }
              } catch (o) {
                e = { error: o };
              } finally {
                try {
                  i && !i.done && (t = r.return) && t.call(r);
                } finally {
                  if (e) throw e.error;
                }
              }
              return n;
            }),
            (t.prototype.initializeFeatures = function (e) {
              var t,
                n,
                r = this._clientOptions.documentSelector;
              try {
                for (
                  var i = s(this._features), o = i.next();
                  !o.done;
                  o = i.next()
                ) {
                  o.value.initialize(this._capabilities, r);
                }
              } catch (a) {
                t = { error: a };
              } finally {
                try {
                  o && !o.done && (n = i.return) && n.call(i);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (t.prototype.handleRegistrationRequest = function (e) {
              var t = this;
              return new Promise(function (n, r) {
                var i, o;
                try {
                  for (
                    var a = s(e.registrations), c = a.next();
                    !c.done;
                    c = a.next()
                  ) {
                    var u = c.value,
                      d = t._dynamicFeatures.get(u.method);
                    if (!d)
                      return void r(
                        new Error(
                          "No feature implementation for " +
                            u.method +
                            " found. Registration failed."
                        )
                      );
                    var l = u.registerOptions || {};
                    l.documentSelector =
                      l.documentSelector || t._clientOptions.documentSelector;
                    var p = { id: u.id, registerOptions: l };
                    d.register(t._method2Message.get(u.method), p);
                  }
                } catch (f) {
                  i = { error: f };
                } finally {
                  try {
                    c && !c.done && (o = a.return) && o.call(a);
                  } finally {
                    if (i) throw i.error;
                  }
                }
                n();
              });
            }),
            (t.prototype.handleUnregistrationRequest = function (e) {
              var t = this;
              return new Promise(function (n, r) {
                var i, o;
                try {
                  for (
                    var a = s(e.unregisterations), c = a.next();
                    !c.done;
                    c = a.next()
                  ) {
                    var u = c.value,
                      d = t._dynamicFeatures.get(u.method);
                    if (!d)
                      return void r(
                        new Error(
                          "No feature implementation for " +
                            u.method +
                            " found. Unregistration failed."
                        )
                      );
                    d.unregister(u.id);
                  }
                } catch (l) {
                  i = { error: l };
                } finally {
                  try {
                    c && !c.done && (o = a.return) && o.call(a);
                  } finally {
                    if (i) throw i.error;
                  }
                }
                n();
              });
            }),
            (t.prototype.handleApplyWorkspaceEdit = function (e) {
              var t,
                n,
                r = e.edit,
                i = new Map();
              a.workspace.textDocuments.forEach(function (e) {
                return i.set(e.uri.toString(), e);
              });
              var o = !1;
              if (r.documentChanges)
                try {
                  for (
                    var c = s(r.documentChanges), u = c.next();
                    !u.done;
                    u = c.next()
                  ) {
                    var d = u.value;
                    if (d.textDocument.version && d.textDocument.version >= 0) {
                      var l = i.get(d.textDocument.uri);
                      if (l && l.version !== d.textDocument.version) {
                        o = !0;
                        break;
                      }
                    }
                  }
                } catch (p) {
                  t = { error: p };
                } finally {
                  try {
                    u && !u.done && (n = c.return) && n.call(c);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              return o
                ? Promise.resolve({ applied: !1 })
                : a.workspace
                    .applyEdit(this._p2c.asWorkspaceEdit(e.edit))
                    .then(function (e) {
                      return { applied: e };
                    });
            }),
            (t.prototype.logFailedRequest = function (e, t) {
              (t instanceof c.ResponseError &&
                t.code === c.ErrorCodes.RequestCancelled) ||
                this.error("Request " + e.method + " failed.", t);
            }),
            t
          );
        })();
        t.BaseLanguageClient = X;
      }.call(this, n("8oxB")));
    },
    sKb1: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("MOv1");
      !(function (e) {
        e.type = new r.RequestType("workspace/configuration");
      })(t.ConfigurationRequest || (t.ConfigurationRequest = {}));
    },
    uSJ4: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n("AL8H"),
        o = n("hC2b"),
        s = n("uoVZ"),
        a = n("BOov");
      function c(e, t) {
        return void 0 === e[t] && (e[t] = {}), e[t];
      }
      var u = (function (e) {
        function t(t) {
          return e.call(this, t, a.TypeDefinitionRequest.type) || this;
        }
        return (
          r(t, e),
          (t.prototype.fillClientCapabilities = function (e) {
            c(c(e, "textDocument"), "typeDefinition").dynamicRegistration = !0;
          }),
          (t.prototype.initialize = function (e, t) {
            if (e.typeDefinitionProvider)
              if (!0 === e.typeDefinitionProvider) {
                if (!t) return;
                this.register(this.messages, {
                  id: i.generateUuid(),
                  registerOptions: Object.assign({}, { documentSelector: t }),
                });
              } else {
                var n = e.typeDefinitionProvider,
                  r =
                    o.string(n.id) && n.id.length > 0 ? n.id : i.generateUuid(),
                  s = n.documentSelector || t;
                s &&
                  this.register(this.messages, {
                    id: r,
                    registerOptions: Object.assign({}, { documentSelector: s }),
                  });
              }
          }),
          (t.prototype.registerLanguageProvider = function (e) {
            var t = this._client,
              n = function (e, n, r) {
                return t
                  .sendRequest(
                    a.TypeDefinitionRequest.type,
                    t.code2ProtocolConverter.asTextDocumentPositionParams(e, n),
                    r
                  )
                  .then(
                    t.protocol2CodeConverter.asDefinitionResult,
                    function (e) {
                      return (
                        t.logFailedRequest(a.TypeDefinitionRequest.type, e),
                        Promise.resolve(null)
                      );
                    }
                  );
              },
              r = t.clientOptions.middleware;
            return s.languages.registerTypeDefinitionProvider(
              e.documentSelector,
              {
                provideTypeDefinition: function (e, t, i) {
                  return r.provideTypeDefinition
                    ? r.provideTypeDefinition(e, t, i, n)
                    : n(e, t, i);
                },
              }
            );
          }),
          t
        );
      })(n("qRuN").TextDocumentFeature);
      t.TypeDefinitionFeature = u;
    },
    uUC1: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n("RUQ2"),
        i = n("K4MX"),
        o = n("k5Vz");
      (t.createClientSocketTransport = function (e, t = "utf-8") {
        let n,
          s = new Promise((e, t) => {
            n = e;
          });
        return new Promise((a, c) => {
          let u = r.createServer((e) => {
            u.close(),
              n([
                new i.SocketMessageReader(e, t),
                new o.SocketMessageWriter(e, t),
              ]);
          });
          u.on("error", c),
            u.listen(e, "127.0.0.1", () => {
              u.removeListener("error", c), a({ onConnected: () => s });
            });
        });
      }),
        (t.createServerSocketTransport = function (e, t = "utf-8") {
          const n = r.createConnection(e, "127.0.0.1");
          return [
            new i.SocketMessageReader(n, t),
            new o.SocketMessageWriter(n, t),
          ];
        });
    },
    uoVZ: function (e, t, n) {
      "use strict";
      var r = n("DFRf"),
        i = n("Gz0x");
      e.exports = r.createVSCodeApi(i.Services.get);
    },
    wSv1: function (e, t, n) {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          (e.None = 0), (e.First = 1), (e.Last = 2);
        })((r = t.Touch || (t.Touch = {})));
      t.LinkedMap = class {
        constructor() {
          (this._map = new Map()),
            (this._head = void 0),
            (this._tail = void 0),
            (this._size = 0);
        }
        clear() {
          this._map.clear(),
            (this._head = void 0),
            (this._tail = void 0),
            (this._size = 0);
        }
        isEmpty() {
          return !this._head && !this._tail;
        }
        get size() {
          return this._size;
        }
        has(e) {
          return this._map.has(e);
        }
        get(e) {
          const t = this._map.get(e);
          if (t) return t.value;
        }
        set(e, t, n = r.None) {
          let i = this._map.get(e);
          if (i) (i.value = t), n !== r.None && this.touch(i, n);
          else {
            switch (
              ((i = { key: e, value: t, next: void 0, previous: void 0 }), n)
            ) {
              case r.None:
                this.addItemLast(i);
                break;
              case r.First:
                this.addItemFirst(i);
                break;
              case r.Last:
              default:
                this.addItemLast(i);
            }
            this._map.set(e, i), this._size++;
          }
        }
        delete(e) {
          const t = this._map.get(e);
          return (
            !!t && (this._map.delete(e), this.removeItem(t), this._size--, !0)
          );
        }
        shift() {
          if (!this._head && !this._tail) return;
          if (!this._head || !this._tail) throw new Error("Invalid list");
          const e = this._head;
          return (
            this._map.delete(e.key), this.removeItem(e), this._size--, e.value
          );
        }
        forEach(e, t) {
          let n = this._head;
          for (; n; )
            t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this),
              (n = n.next);
        }
        forEachReverse(e, t) {
          let n = this._tail;
          for (; n; )
            t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this),
              (n = n.previous);
        }
        values() {
          let e = [],
            t = this._head;
          for (; t; ) e.push(t.value), (t = t.next);
          return e;
        }
        keys() {
          let e = [],
            t = this._head;
          for (; t; ) e.push(t.key), (t = t.next);
          return e;
        }
        addItemFirst(e) {
          if (this._head || this._tail) {
            if (!this._head) throw new Error("Invalid list");
            (e.next = this._head), (this._head.previous = e);
          } else this._tail = e;
          this._head = e;
        }
        addItemLast(e) {
          if (this._head || this._tail) {
            if (!this._tail) throw new Error("Invalid list");
            (e.previous = this._tail), (this._tail.next = e);
          } else this._head = e;
          this._tail = e;
        }
        removeItem(e) {
          if (e === this._head && e === this._tail)
            (this._head = void 0), (this._tail = void 0);
          else if (e === this._head) this._head = e.next;
          else if (e === this._tail) this._tail = e.previous;
          else {
            const t = e.next,
              n = e.previous;
            if (!t || !n) throw new Error("Invalid list");
            (t.previous = n), (n.next = t);
          }
        }
        touch(e, t) {
          if (!this._head || !this._tail) throw new Error("Invalid list");
          if (t === r.First || t === r.Last)
            if (t === r.First) {
              if (e === this._head) return;
              const t = e.next,
                n = e.previous;
              e === this._tail
                ? ((n.next = void 0), (this._tail = n))
                : ((t.previous = n), (n.next = t)),
                (e.previous = void 0),
                (e.next = this._head),
                (this._head.previous = e),
                (this._head = e);
            } else if (t === r.Last) {
              if (e === this._tail) return;
              const t = e.next,
                n = e.previous;
              e === this._head
                ? ((t.previous = void 0), (this._head = t))
                : ((t.previous = n), (n.next = t)),
                (e.next = void 0),
                (e.previous = this._tail),
                (this._tail.next = e),
                (this._tail = e);
            }
        }
      };
    },
    xagI: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("uoVZ"),
        i = n("BOov"),
        o = n("hC2b"),
        s = n("QGVK"),
        a = n("h0WC"),
        c = n("ojtU");
      t.createConverter = function (e) {
        var t =
          e ||
          function (e) {
            return e.toString();
          };
        function n(e) {
          return t(e);
        }
        function u(e) {
          return { uri: t(e.uri) };
        }
        function d(e) {
          return { uri: t(e.uri), version: e.version };
        }
        function l(e) {
          switch (e) {
            case r.TextDocumentSaveReason.Manual:
              return i.TextDocumentSaveReason.Manual;
            case r.TextDocumentSaveReason.AfterDelay:
              return i.TextDocumentSaveReason.AfterDelay;
            case r.TextDocumentSaveReason.FocusOut:
              return i.TextDocumentSaveReason.FocusOut;
          }
          return i.TextDocumentSaveReason.Manual;
        }
        function p(e) {
          switch (e) {
            case r.CompletionTriggerKind.TriggerCharacter:
              return i.CompletionTriggerKind.TriggerCharacter;
            case r.CompletionTriggerKind.TriggerForIncompleteCompletions:
              return i.CompletionTriggerKind.TriggerForIncompleteCompletions;
            default:
              return i.CompletionTriggerKind.Invoked;
          }
        }
        function f(e) {
          return { line: e.line, character: e.character };
        }
        function m(e) {
          if (void 0 !== e)
            return null === e ? null : { line: e.line, character: e.character };
        }
        function g(e) {
          return void 0 === e || null === e
            ? e
            : { start: m(e.start), end: m(e.end) };
        }
        function h(e) {
          switch (e) {
            case r.DiagnosticSeverity.Error:
              return i.DiagnosticSeverity.Error;
            case r.DiagnosticSeverity.Warning:
              return i.DiagnosticSeverity.Warning;
            case r.DiagnosticSeverity.Information:
              return i.DiagnosticSeverity.Information;
            case r.DiagnosticSeverity.Hint:
              return i.DiagnosticSeverity.Hint;
          }
        }
        function v(e) {
          var t = i.Diagnostic.create(g(e.range), e.message);
          return (
            o.number(e.severity) && (t.severity = h(e.severity)),
            (o.number(e.code) || o.string(e.code)) && (t.code = e.code),
            e.source && (t.source = e.source),
            t
          );
        }
        function y(e) {
          return void 0 === e || null === e ? e : e.map(v);
        }
        function C(e) {
          return { range: g(e.range), newText: e.newText };
        }
        function D(e) {
          var t = i.Command.create(e.title, e.command);
          return e.arguments && (t.arguments = e.arguments), t;
        }
        return {
          asUri: n,
          asTextDocumentIdentifier: u,
          asOpenTextDocumentParams: function (e) {
            return {
              textDocument: {
                uri: t(e.uri),
                languageId: e.languageId,
                version: e.version,
                text: e.getText(),
              },
            };
          },
          asChangeTextDocumentParams: function (e) {
            if (
              (function (e) {
                var t = e;
                return !!t.uri && !!t.version;
              })(e)
            )
              return {
                textDocument: { uri: t(e.uri), version: e.version },
                contentChanges: [{ text: e.getText() }],
              };
            if (
              (function (e) {
                var t = e;
                return !!t.document && !!t.contentChanges;
              })(e)
            ) {
              var n = e.document;
              return {
                textDocument: { uri: t(n.uri), version: n.version },
                contentChanges: e.contentChanges.map(function (e) {
                  var t = e.range;
                  return {
                    range: {
                      start: {
                        line: t.start.line,
                        character: t.start.character,
                      },
                      end: { line: t.end.line, character: t.end.character },
                    },
                    rangeLength: e.rangeLength,
                    text: e.text,
                  };
                }),
              };
            }
            throw Error("Unsupported text document change parameter");
          },
          asCloseTextDocumentParams: function (e) {
            return { textDocument: u(e) };
          },
          asSaveTextDocumentParams: function (e, t) {
            void 0 === t && (t = !1);
            var n = { textDocument: d(e) };
            return t && (n.text = e.getText()), n;
          },
          asWillSaveTextDocumentParams: function (e) {
            return { textDocument: u(e.document), reason: l(e.reason) };
          },
          asTextDocumentPositionParams: function (e, t) {
            return { textDocument: u(e), position: f(t) };
          },
          asCompletionParams: function (e, t, n) {
            return {
              textDocument: u(e),
              position: f(t),
              context: {
                triggerKind: p(n.triggerKind),
                triggerCharacter: n.triggerCharacter,
              },
            };
          },
          asWorkerPosition: f,
          asRange: g,
          asPosition: m,
          asDiagnosticSeverity: h,
          asDiagnostic: v,
          asDiagnostics: y,
          asCompletionItem: function (e) {
            var t,
              n,
              a = { label: e.label },
              c = e instanceof s.default ? e : void 0;
            return (
              e.detail && (a.detail = e.detail),
              e.documentation &&
                (c && "$string" !== c.documentationFormat
                  ? (a.documentation = (function (e, t) {
                      switch (e) {
                        case "$string":
                          return t;
                        case i.MarkupKind.PlainText:
                          return { kind: e, value: t };
                        case i.MarkupKind.Markdown:
                          return { kind: e, value: t.value };
                        default:
                          return (
                            "Unsupported Markup content received. Kind is: " + e
                          );
                      }
                    })(c.documentationFormat, e.documentation))
                  : (a.documentation = e.documentation)),
              e.filterText && (a.filterText = e.filterText),
              (function (e, t) {
                var n,
                  o = i.InsertTextFormat.PlainText,
                  s = void 0;
                t.textEdit
                  ? ((n = t.textEdit.newText), (s = g(t.textEdit.range)))
                  : t.insertText instanceof r.SnippetString
                  ? ((o = i.InsertTextFormat.Snippet), (n = t.insertText.value))
                  : (n = t.insertText);
                t.range && (s = g(t.range));
                (e.insertTextFormat = o),
                  t.fromEdit && n && s
                    ? (e.textEdit = { newText: n, range: s })
                    : (e.insertText = n);
              })(a, e),
              o.number(e.kind) &&
                (a.kind =
                  ((t = e.kind),
                  void 0 !== (n = c && c.originalItemKind) ? n : t + 1)),
              e.sortText && (a.sortText = e.sortText),
              e.additionalTextEdits &&
                (a.additionalTextEdits = (function (e) {
                  if (void 0 === e || null === e) return e;
                  return e.map(C);
                })(e.additionalTextEdits)),
              e.commitCharacters &&
                (a.commitCharacters = e.commitCharacters.slice()),
              e.command && (a.command = D(e.command)),
              (!0 !== e.preselect && !1 !== e.preselect) ||
                (a.preselect = e.preselect),
              c &&
                (void 0 !== c.data && (a.data = c.data),
                (!0 !== c.deprecated && !1 !== c.deprecated) ||
                  (a.deprecated = c.deprecated)),
              a
            );
          },
          asTextEdit: C,
          asReferenceParams: function (e, t, n) {
            return {
              textDocument: u(e),
              position: f(t),
              context: { includeDeclaration: n.includeDeclaration },
            };
          },
          asCodeActionContext: function (e) {
            return void 0 === e || null === e
              ? e
              : i.CodeActionContext.create(
                  y(e.diagnostics),
                  o.string(e.only) ? [e.only] : void 0
                );
          },
          asCommand: D,
          asCodeLens: function (e) {
            var t = i.CodeLens.create(g(e.range));
            return (
              e.command && (t.command = D(e.command)),
              e instanceof a.default && e.data && (t.data = e.data),
              t
            );
          },
          asFormattingOptions: function (e) {
            return { tabSize: e.tabSize, insertSpaces: e.insertSpaces };
          },
          asDocumentSymbolParams: function (e) {
            return { textDocument: u(e) };
          },
          asCodeLensParams: function (e) {
            return { textDocument: u(e) };
          },
          asDocumentLink: function (e) {
            var t = i.DocumentLink.create(g(e.range));
            e.target && (t.target = n(e.target));
            var r = e instanceof c.default ? e : void 0;
            return r && r.data && (t.data = r.data), t;
          },
          asDocumentLinkParams: function (e) {
            return { textDocument: u(e) };
          },
        };
      };
    },
    zZpG: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("MOv1");
      !(function (e) {
        e.type = new r.RequestType("textDocument/documentColor");
      })(t.DocumentColorRequest || (t.DocumentColorRequest = {})),
        (function (e) {
          e.type = new r.RequestType("textDocument/colorPresentation");
        })(t.ColorPresentationRequest || (t.ColorPresentationRequest = {}));
    },
    "zxs+": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("Gz0x"),
        i = (function () {
          function e(e, t, n) {
            void 0 === n && (n = null);
            var i = this;
            (this.p2m = e),
              (this.m2p = t),
              (this._rootUri = n),
              (this.documents = new Map()),
              (this.onDidOpenTextDocumentEmitter = new r.Emitter()),
              (this.onDidCloseTextDocumentEmitter = new r.Emitter()),
              (this.onDidChangeTextDocumentEmitter = new r.Emitter());
            for (var o = 0, s = monaco.editor.getModels(); o < s.length; o++) {
              var a = s[o];
              this.addModel(a);
            }
            monaco.editor.onDidCreateModel(function (e) {
              return i.addModel(e);
            }),
              monaco.editor.onWillDisposeModel(function (e) {
                return i.removeModel(e);
              });
          }
          return (
            Object.defineProperty(e.prototype, "rootUri", {
              get: function () {
                return this._rootUri;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.removeModel = function (e) {
              var t = e.uri.toString(),
                n = this.documents.get(t);
              n &&
                (this.documents.delete(t),
                this.onDidCloseTextDocumentEmitter.fire(n));
            }),
            (e.prototype.addModel = function (e) {
              var t = this,
                n = e.uri.toString(),
                r = this.setModel(n, e);
              this.onDidOpenTextDocumentEmitter.fire(r),
                e.onDidChangeContent(function (r) {
                  return t.onDidChangeContent(n, e, r);
                });
            }),
            (e.prototype.onDidChangeContent = function (e, t, n) {
              for (
                var r = this.setModel(e, t), i = [], o = 0, s = n.changes;
                o < s.length;
                o++
              ) {
                var a = s[o],
                  c = this.m2p.asRange(a.range),
                  u = a.rangeLength,
                  d = a.text;
                i.push({ range: c, rangeLength: u, text: d });
              }
              this.onDidChangeTextDocumentEmitter.fire({
                textDocument: r,
                contentChanges: i,
              });
            }),
            (e.prototype.setModel = function (e, t) {
              var n = r.TextDocument.create(
                e,
                t.getModeId(),
                t.getVersionId(),
                t.getValue()
              );
              return this.documents.set(e, n), n;
            }),
            Object.defineProperty(e.prototype, "textDocuments", {
              get: function () {
                return Array.from(this.documents.values());
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onDidOpenTextDocument", {
              get: function () {
                return this.onDidOpenTextDocumentEmitter.event;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onDidCloseTextDocument", {
              get: function () {
                return this.onDidCloseTextDocumentEmitter.event;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onDidChangeTextDocument", {
              get: function () {
                return this.onDidChangeTextDocumentEmitter.event;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.applyEdit = function (e) {
              var t = this.p2m.asWorkspaceEdit(e),
                n = t.edits.reduce(function (e, t) {
                  var n = t;
                  return (
                    (e[n.resource.toString()] = monaco.editor.getModel(
                      n.resource
                    )),
                    e
                  );
                }, {});
              if (
                !Object.keys(n)
                  .map(function (e) {
                    return n[e];
                  })
                  .every(function (e) {
                    return !!e;
                  })
              )
                return Promise.resolve(!1);
              var r = t.edits.reduce(function (e, t) {
                var n,
                  r = t,
                  i = r.resource.toString();
                i in e || (e[i] = []);
                var o = r.edits.map(function (e) {
                  return { range: monaco.Range.lift(e.range), text: e.text };
                });
                return (n = e[i]).push.apply(n, o), e;
              }, {});
              return (
                Object.keys(r).forEach(function (e) {
                  n[e].pushEditOperations(
                    [],
                    r[e].map(function (e) {
                      return {
                        identifier: { major: 1, minor: 0 },
                        range: e.range,
                        text: e.text,
                        forceMoveMarkers: !0,
                      };
                    }),
                    function () {
                      return [];
                    }
                  );
                }),
                Promise.resolve(!0)
              );
            }),
            e
          );
        })();
      t.MonacoWorkspace = i;
    },
  },
]);
