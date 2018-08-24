import java.util.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
public class  DuplicateArray1{
    public void duplicateVal(Integer[] str, int x){
        
        LinkedList<Integer> obj = new LinkedList<Integer>(Arrays.asList(str));
         
        System.out.println(obj);
        HashMap<Integer,Integer> hash = new HashMap<Integer,Integer>();
          for(int sh : obj){
              if(hash.containsKey(sh)){
                 hash.put(sh, hash.get(sh)+1); 
              }else{
                 hash.put(sh,1);    
              }
          }
          Set<Integer> key = hash.keySet();
          System.out.println(key);
          for(Integer sj:key){
              if(hash.get(sj)==x){
                  System.out.println("rarest of "+x+"number is "+hash.get(sj));
              }
          }
          
        }
    
  public static void main(String a[]){
    DuplicateArray1 obj = new DuplicateArray1();
    System.out.println("String: BeginnersBook.com");
    System.out.println("-------------------------");
    obj.duplicateVal(new Integer[] {5,4,3,2,5,4,3,5,2,1,5,4,5,3},2);
  
    
  }
}