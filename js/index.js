function ShowHide(hiddenDiv)
{
    if(document.getElementById(hiddenDiv).style.display == 'none')
    {
        document.getElementById(hiddenDiv).style.display='block';
    }
    else
    {
        document.getElementById(hiddenDiv).style.display = 'none';
    }
}