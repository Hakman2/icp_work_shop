import Debug "mo:base/Debug";
actor Project{
  // var greeting : Text = "Hello UCC";
  // Debug.print(greeting);
  // let number : Nat = 8;
  // Debug.print(debug_show(number));

  // Creating a simple Record Type
  // type StudentInfo = {
  //   name : Text;
  //   id : Nat;
  //   isEaten : Bool;
  // };

  // var studentInfo : StudentInfo = {
  //   name = "Osei Assibey";
  //   id = 2983094;
  //   isEaten = false;
  // };

  // Debug.print(debug_show(studentInfo));

  // Functions
  // public func addTwoNumbers(num1 : Nat, num2 : Nat): async Nat{
  //   var total : Nat = num1 + num2;
  //   return total;
  // };

  // Simple Calulator 
  public func addFunc(num1 : Nat, num2 : Nat): async Nat{
    var total : Nat = num1 + num2;
    return total;
  };

  public func subFunc(num1 : Nat, num2 : Nat): async Nat{
    var sub : Nat = num1 - num2;
    return sub;
  };

  public func mulFunc(num1 : Nat, num2 : Nat): async Nat{
    var mul : Nat = num1 * num2;
    return mul;
  };

  public func divFunc(num1 : Nat, num2 : Nat): async Nat{
    var div : Nat = num1 / num2;
    return div;
  };

  
};