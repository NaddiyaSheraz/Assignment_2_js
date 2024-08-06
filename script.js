

// >>>>>>>>>Declare 3 variables in one statement. 
var MyName="NaddiyaSheraz", MyAge=19 , MyQalification="Undergraduate";
document .write("My name is" +" " + MyName + ". I am" +" " + MyAge +" years old " 
                + ".and i am"+ " " + MyQalification)

// >>>>>>>>>> Declare 5 legal & 5 illegal variable names.
// --------legal variables----------
var MyName="a"; 
var _MyFatherName="b";
var myAge="c"; 
var MyQalification123="d"; 
var $MyHobbie="e";
// -----------illegal variable----------
var 123Myname ="a"; 
var My Father Name ="b"; 
var Var ="c";  
var &Myage ="d"; 
var My-hobbies ="e";

// Display this in your browser 
// a)  A heading stating “Rules for naming JS variables”
var Heading1 ="Rules for naming JS variables" 
document .write (Heading1);

// Display this in your browser 
// b)Variable names can only contain ______, ______, 
// ______ and ______. 
var Contain1="Letters";
var Contain2="Numbers";
var Contain3="Dollar signs";
var Contain4="Underscores";
document .write (" Variable names can only contain" + " " + Contain1 + "," + " " + Contain2 + "," + " " + Contain3 + "," +" " + Contain4 + ".");

// Display this in your browser 
// c)Variables must begin with a ______, ______ or _____.
var start1="Letters";
var start2="Underscores";
var start3="Dollar signs";
var Contain4="Underscores";
document .write (" Variables must begin with a" + " " + start1 + "," + " " + start2 + " " + "or" + " " + start3 + ".");

// Display this in your browser 
// d)Variable names are case _________
var Name = "Sensitive";
document .write ( "Variable names are case"+ " " + Name +".");

// Display this in your browser
// e)Variable names should not be JS _________  
var NameCanNOtStart = " keywords";
document .write ("Variable names should not be JS" + " " +NameCanNOtStart + "." )