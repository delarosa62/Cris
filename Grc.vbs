Dim OWS,strCurDir

Set oWS = CreateObject("WScript.Shell")
'oWS.Run "msedge https://www.rentcarcuba.com/"

Sleep 5

oWS.SendKeys "^f"
Sleep 1
oWS.SendKeys "AzureAD"
Sleep 1
oWS.SendKeys "{ESCAPE}"
Sleep 1
oWS.SendKeys "{ENTER}"
Sleep 1

'strCurDir = oWS.CurrentDirectory

'Call GoAhead()

Set oWs = Nothing

Sub Sleep(lngDelay)
   'oWS.Run "Timeout /T " & lngDelay & " /nobreak", 0, True
   wscript.sleep lngDelay * 1000

End Sub

Sub Enter(t)

 For i=1 to int(t)

   oWS.SendKeys "{ENTER}"

 Next

End Sub

Sub Tab(t)

 For i=1 to int(t)

   oWS.SendKeys "{TAB}"

 Next

End Sub

Sub BackSpace(t)

 For i=1 to int(t)

   oWS.SendKeys "{BACKSPACE}"

 Next

End Sub

Sub Typing(entries)

  Sleep 1
  oWS.SendKeys entries

End Sub

Sub Click(elementText, pos)

 Sleep 1
 
 oWS.SendKeys "^f"
 Sleep 1

 BackSpace 1
 Sleep 1

 Typing elementText
 Sleep 1
 
 if pos > 1 then

  Tab 2
  Sleep 1
 
  For k=1 to int(int(pos)-1)

   Enter 1

  Next

 end if

 oWS.SendKeys "{ESCAPE}"
 Sleep 1

 Enter 1
 Sleep 1

End Sub

Sub GoAhead()

    'currentFile = strCurDir & "\started.txt"
    'Set FSO = CreateObject("Scripting.FileSystemObject")

    '
    'pgContent = getClipBoardText()
   
    'If instr(pgContent, "Regresar") = 0 Then

      'Click "Seleccione un destino", 1



    'else

      'Set objFile = FSO.CreateTextFile(currentFile,True)

      'objFile.Write "Started.txt"
      'objFile.Close

      Sleep 5

      Tab 22

      Sleep 1

      Enter 1

      Click "Regresar", 1

      Click "Seleccione un destino", 1
   
      Typing "Santiago de Cuba"
      Sleep 1
      Enter 1

      Click "Seleccione una oficina", 1
      Typing "AEROPUERTO A.MACEO"
      Sleep 1
      Tab 1
      Enter 1

      Tab 1

exit sub
      Click "Seleccione una oficina", 2
      Typing "AEROPUERTO A.MACEO"
      Enter 1
     
    'End If

    'Set objFile = Nothing
    'Set WshShell = Nothing
    'Set FSO = Nothing

End Sub

Function getClipBoardText()

  Sleep 3

  oWS.SendKeys("^a")
  Sleep 1

  oWS.SendKeys("^c")
  Sleep 1

  oWS.SendKeys("^+r")
  sleep 1

  Sleep 1

  'Get clipboard text
  Set objHTML = CreateObject("htmlfile")
  getClipBoardText = objHTML.ParentWindow.ClipboardData.GetData("text")

End Function