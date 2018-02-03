public class HelloWorld {


  public static void main(String[] args) {
    //Prints "Hello, World" to the terminal window.
    for(int i=10; i>1; i--){
      //System.out.println("The value of i is: "+i);
    }

    int a = num(7,4,10);
    System.out.println("The value of i is: "+a);

  }

  public static int num(int n, int a, int l) {
    l++;
    int[] res;
    if(n > 1) {
        for(int k=(n<a ? n : a); k>0; k--) {
            int t = num(n-k,k,l);
            if(n==k) {
                int[] v = {k};
                res.push(
                    v
                );
                continue;
            }
            for(int j=0; j< t.length; j++) {
                int[] m;// = [].concat(k,t[j]);
                int[] v = {k};
                System.arraycopy(v, 0, m, 0, 1);
                System.arraycopy(t[j], 0, m, 1, t[j].length);
                if(m.length < l)
                    res.push(m);
            }
        }
        return res;
    } else {
        int[] v = {n};
        return v;
    }


  }

}
