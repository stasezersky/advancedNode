####the exec method creates a shell and executes the command inside - the output of the command is buffered entirly and then passed to a cb(err, stdout, stderr)

####the execFile is sam as exec and is the method that used to execute a file without using shell. 
it is doesn't support io redirection